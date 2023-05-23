import java.io.*;
import java.util.StringTokenizer;

public class BJ1149 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int data[][] = new int [N][3];

        for(int i =0;i<N;i++){
            StringTokenizer st = new StringTokenizer(br.readLine());
            data[i][0] = Integer.parseInt(st.nextToken());
            data[i][1] = Integer.parseInt(st.nextToken());
            data[i][2] = Integer.parseInt(st.nextToken());
        }

        for(int i = 1;i<N; i++){
            data[i][0] = Math.min(data[i-1][1], data[i-1][2]) + data[i][0];
            data[i][1] = Math.min(data[i-1][0], data[i-1][2]) + data[i][1];
            data[i][2] = Math.min(data[i-1][0], data[i-1][1]) + data[i][2];
        }

        System.out.println(Math.min(data[N-1][0],Math.min(data[N-1][1],data[N-1][2])));
    }
}