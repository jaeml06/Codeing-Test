import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main{
    static boolean visited[];
    static List<Integer> list[];
    static int target[];
    static int count[];


    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        int n = Integer.parseInt(br.readLine());
        target = new int[2];
        list= new ArrayList[n+1];
        visited = new boolean[n+1];
        count = new int[n+1];
        for(int i=1;i<n+1;i++){
            list[i] = new ArrayList<>();
        }
        st = new StringTokenizer(br.readLine());
        for(int i = 0;i<2;i++){

            target[i] = Integer.parseInt(st.nextToken());
        }
        int line = Integer.parseInt(br.readLine());


        for(int i=0;i<line;i++){
            st = new StringTokenizer(br.readLine());
            int start = Integer.parseInt(st.nextToken());
            int end = Integer.parseInt(st.nextToken());
            list[start].add(end);
            list[end].add(start);
        }
        System.out.println(bfs());


    }
    public static int bfs(){
        Queue<Integer> queue = new LinkedList<>();
        queue.offer(target[0]);
        visited[target[0]] = true;
        count[target[0]] = 0;

        while (!queue.isEmpty()){
            int current = queue.poll();
            if(current == target[1]){
                return count[current];
            }
            for(int next : list[current]){
                if(!visited[next]){
                    count[next] = count[current]+1;
                    queue.offer(next);
                    visited[next] = true;
                }

            }
        }
        return -1;

    }
}
