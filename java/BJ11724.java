import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main{

    static int graph[][];
    static boolean[] visited;
    static int N,M;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        graph = new int[N+1][N+1];
        visited = new boolean[N+1];

        for(int i=0;i<M;i++){
            st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            graph[a][b] = graph[b][a] = 1;
        }

        int count = 0;

        for(int i =1; i<=N;i++){
            if(!visited[i]){
                bfs(i);
                count++;
            }
        }
        System.out.println(count);
    }
    public static void bfs(int start){
        Queue<Integer> queue = new LinkedList<>();
        queue.add(start);
        visited[start] = true;

        while (!queue.isEmpty()){
            int pos = queue.poll();
            for(int i =1; i<=N; i++){
                if(!visited[i] && graph[pos][i]!=0){
                    visited[i] = true;
                    queue.offer(i);
                }
            }
        }


    }
}
