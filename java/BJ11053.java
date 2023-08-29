import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;


public class Main {

    static int dp[];
    static int data[];
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        data = new int[N];
        dp = new int[N];
        StringTokenizer st = new StringTokenizer(br.readLine());
        for(int i=0;i<N;i++){
            data[i] = Integer.parseInt(st.nextToken());
        }
        Arrays.fill(dp, 1);
        for(int i =0; i<N; i++) {
            for (int j = 0; j < i; j++)
                if (data[j] < data[i])
                    dp[i] = Math.max(dp[i], dp[j]+1);
        }
        System.out.println(Arrays.stream(dp).max().getAsInt());
    }
}