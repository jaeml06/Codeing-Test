import java.io.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.StringTokenizer;


public class BJ24479 {
    static int count=1;
    static private void dfs(int r, int [] visited, ArrayList<Integer>[] data) {
        visited[r] = count;
        for (int i : data[r]) {
            if (visited[i] == 0){
                count++;
                dfs(i ,visited, data);
            }
        }
    }
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        int R = Integer.parseInt(st.nextToken());



        ArrayList<Integer>[] data = new ArrayList[N+1];
        int []visited = new int[N+1];
        for(int i =1; i<=N; i++){
            data[i] = new ArrayList<Integer>();
            visited[i] = 0;
        }

        for(int i = 0; i < M; i++){
            StringTokenizer st1 = new StringTokenizer(br.readLine());
            int u = Integer.parseInt(st1.nextToken());
            int v = Integer.parseInt(st1.nextToken());
            data[u].add(v);
            data[v].add(u);
        }
        for (int i = 1; i <= N; i++) {
            Collections.sort(data[i]);
        }
        dfs(R,visited, data);

        StringBuilder sb = new StringBuilder();
        for (int i = 1; i <= N; i++){
            sb.append(visited[i] + "\n");
        }
        System.out.println(sb);
    }
}