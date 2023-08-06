import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;
public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int T[] = new int[N+1];
        int P[] = new int[N+1];
        int dp[] = new int[N+2];
        for(int i=1;i<=N;i++){
            StringTokenizer st = new StringTokenizer(br.readLine());
            T[i] = Integer.parseInt(st.nextToken());
            P[i] = Integer.parseInt(st.nextToken());
        }
        int max=0;

        for(int i =1; i<=N;i++){

            if(max < dp[i]){
                max  = dp[i];
            }
            int nextDay = i + T[i];
            if(nextDay < N+2){
                dp[nextDay] = Math.max(dp[nextDay] ,max + P[i]);
            }

        }

        Arrays.sort(dp);
        System.out.println(dp[dp.length-1]);



    }
}