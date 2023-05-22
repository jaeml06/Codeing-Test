import java.io.*;

public class BJ15988 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        final int mod = 1000000009;

        int T = Integer.parseInt(br.readLine());
        long []data = new long[1000001];
        data[1]=1;
        data[2]=2;
        data[3]=4;
        for(int i=4;i<1000001;i++){
            data[i] = data[i-1]%mod+ data[i-2]%mod + data[i-3]%mod;
        }
        while (T--!=0){
            int n = Integer.parseInt(br.readLine());
            System.out.println(data[n]%mod);
        }
    }
}