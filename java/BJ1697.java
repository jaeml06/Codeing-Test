import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;


public class Main {
    static int K;
    static int N;
    static int []data;
    static int []visited = new int[100_001];


    static StringBuilder sb = new StringBuilder();

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        K = Integer.parseInt(st.nextToken());
       bfs();
    }

    public static void bfs(){
        Queue<Integer> queue = new LinkedList();
        queue.add(N);
        visited[N] += 1;

        while (!queue.isEmpty()){
            int current = queue.poll();
            if(current == K){
                System.out.println(visited[current]-1);
            }
            if(current+1<=100_000 && visited[current+1]==0){
                queue.add(current+1);
                visited[current+1] = visited[current] + 1;
            }
            if(current-1>=0 && visited[current-1]==0){
                queue.add(current-1);
                visited[current-1] = visited[current] + 1;
            }
            if(current*2<=100_000 && visited[current*2]==0){
                queue.add(current*2);
                visited[current*2] = visited[current] + 1;
            }

        }

    }
}