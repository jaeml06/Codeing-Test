import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;
public class Main {

    public static void main(String[] args) throws IOException {
      BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
      StringTokenizer st;
      int n = Integer.parseInt(br.readLine());

      st =new StringTokenizer(br.readLine());

      int data[] = new int[n];
      int dp[] = new int[n];

      for(int i=0;i<n;i++){
          data[i] = Integer.parseInt(st.nextToken());
      }
      dp[0] = data[0];
      for(int i =1;i<n;i++){
          dp[i] = Math.max(dp[i-1]+data[i], data[i]);
      }
      Arrays.sort(dp);
      System.out.println(dp[n-1]);


    }
}