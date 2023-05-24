import java.io.*;
import java.util.*;

public class BJ2606 {
    static int count = 1;
    static int visited[];
    static ArrayList<Integer>[] data;
    static void bfs(int r){
        visited[r] = count;
        Queue<Integer> queue = new LinkedList<>();
        queue.add(r);
        Iterator<Integer> it = queue.iterator();
        while(it.hasNext()){
            int v = queue.poll();
            for(int i: data[v]){
                if(visited[i]==0){
                    queue.add(i);
                    visited[i] = count++;
                }

            }

        }

    }
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());
        int v = Integer.parseInt(br.readLine());

       data = new ArrayList[n+1];
       visited = new int[n+1];
        for(int i =1; i<=n; i++){
            data[i] = new ArrayList<>();
        }

        for(int i =0; i<v;i++){
            StringTokenizer st = new StringTokenizer(br.readLine());
            int start = Integer.parseInt(st.nextToken());
            int end = Integer.parseInt(st.nextToken());
            data[start].add(end);
            data[end].add(start);

        }
        bfs(1);
        System.out.println(count-1);
    }
}