import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
    static int INF = 100;
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        int [][] distance = new int[N+1][N+1];

        for(int i = 1;i<=N;i++){
            for(int j = 1; j <=N;j++){
                distance[i][j] = INF;

                if(i == j){
                    distance[i][j] =0;
                }
            }
        }

        for(int i = 0;i<M;i++){
            st = new StringTokenizer(br.readLine());
            int start = Integer.parseInt(st.nextToken());
            int end = Integer.parseInt(st.nextToken());

            distance[start][end]= 1;
            distance[end][start] = 1;
        }

        for(int k =1; k<=N; k++){
            for(int i =1; i<=N; i++){
                for(int j =1; j<=N; j++){
                    distance[i][j] = Math.min(distance[i][j], distance[i][k]+ distance[k][j]);
                }
            }
        }

        int pos=0;
        int min = INF;
        for(int i = 1;i<=N;i++){
            int sum = 0;
            sum = Arrays.stream(distance[i]).sum();
            if(min>sum){
                min=sum;
                pos = i;
            }
        }
        System.out.println(pos);


    }
}
