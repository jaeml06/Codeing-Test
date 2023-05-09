import java.io.*;
import java.util.*;
/*
bfs(너비우선 탐색의 기본적인 문제
bfs는 큐를 이용해서  문제 해결
O(N)의 수행시간 일반적인 경우 DFS보다 실행시간이 좋은편이다
bfs구현에 있어 for(Integer i : queue)는 ConcurrentModificationException오류를 발생시킨다.
Iterator사용하도록 하자
 */
public class BJ24444 {
    static int count=1;
    static private void bfs(int r, int [] visited, ArrayList<Integer>[] data) {
        Queue<Integer> queue = new LinkedList<>();
        queue.add(r);
        visited[r] = count++;
        Iterator<Integer> it = queue.iterator();
        while(it.hasNext()){
            int v = queue.remove();
            for(int j:data[v]){
                if(visited[j]==0){
                    queue.add(j);
                    visited[j] = count++;
                }
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
        bfs(R,visited, data);

        StringBuilder sb = new StringBuilder();
        for (int i = 1; i <= N; i++){
            sb.append(visited[i] + "\n");
        }
        System.out.println(sb);
    }
}