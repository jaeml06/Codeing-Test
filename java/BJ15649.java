import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;


public class Main {
    static int M;
    static int N;
    static int []data;
    static boolean []visited;

    static StringBuilder sb = new StringBuilder();

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        data = new int[M+1];
        visited = new boolean[N+1];
        dfs(1);
        System.out.println(sb);
    }

    public static void dfs(int count){
        if(count-1 == M){
            for(int i = 1; i<=M;i++){
                sb.append(data[i]).append(" ");
            }
            sb.append("\n");
            return;
        }

        for(int i=1;i<=N;i++){
            if(!visited[i]){
                visited[i] = true;
                data[count] = i;
                dfs(count+1);
                visited[i] =false;
            }
        }
    }
}