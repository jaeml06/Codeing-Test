import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Solution {

    static int[] arr;
    static int[] seq;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        arr = new int[N+1];

        for(int i =0;i<N;i++){
            arr[i]=i;
        }

        for(int i=0; i<M;i++){
            st = new StringTokenizer(br.readLine());
            union(Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken()));
        }
        seq = new int[N];
        st = new StringTokenizer(br.readLine());
        for(int i = 0;i<N;i++){
            seq[i] = Integer.parseInt(st.nextToken());
        }

        int count = 0;
        for(int i=1;i<N;i++){
             if(find(seq[i])!=find(seq[i-1])){
                 count++;
             }
        }
        System.out.println(count);

    }
    static void union(int a, int b) {
        int c = find(a);
        int d = find(b);

        arr[d] = c;
    }

    static int find(int n) {
        if (arr[n] != n) {
            return arr[n] = find(arr[n]);
        }
        return n;
    }
}
