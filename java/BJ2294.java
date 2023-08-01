import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int k = Integer.parseInt(st.nextToken());

        long [] dp = new long[k+1];
        for(int i =0;i<k+1;i++){
            dp[i] = 100_001;
        }
        int [] coins = new int[n];
        for(int i = 0; i<n;i++){
            coins[i] = Integer.parseInt(br.readLine());
        }

        for(int i =0; i<n; i++){
            if(coins[i]<=k){
                dp[coins[i]] =1;
            }

        }

        for(int i = 0;i<=k;i++){
            for(int j =0 ;j<n;j++){
                if(i+coins[j]<=k){
                    dp[i+coins[j]]= Math.min(dp[i+coins[j]], dp[i]+1);
                }

            }
        }

        if(dp[k]==100_001){
            System.out.println(-1);
        }
        else {
            System.out.println(dp[k]);
        }

    }
}
