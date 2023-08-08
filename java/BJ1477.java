import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Solution {

    static int pos[];

    static boolean check(int mid, int M){
        int sum=0;
        for(int i = 1; i<pos.length;i++){
            sum+=(pos[i]-pos[i-1]-1)/mid;
        }
        if(M<sum){
            return true;
        }
        else {
            return false;
        }

    }

    public static void main(String[] args) throws IOException {
      BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
      StringTokenizer st = new StringTokenizer(br.readLine());
      StringBuilder sb = new StringBuilder();
      int N = Integer.parseInt(st.nextToken());
      int M = Integer.parseInt(st.nextToken());
      int L = Integer.parseInt(st.nextToken());

      pos = new int[N+2];
      pos[0] = 0;
      st = new StringTokenizer(br.readLine());
      for(int i = 1; i<=N;i++){
          pos[i] = Integer.parseInt(st.nextToken());
      }
      pos[N+1]= L;
      Arrays.sort(pos);
      int left = 1;
      int right = L-1;
      int mid=0;
      while(left<=right){
          mid = (left+right)/2;
          if (check(mid, M)){
              left = mid+1;
          }
          else{
              right = mid-1;
          }
      }
      System.out.println(left);


    }
}
