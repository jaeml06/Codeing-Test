import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;


public class Main {
    static int N;
    static int M;
    static ArrayList<Integer> []arr;
    static int []visited ;
    static boolean []check;

    public static void main(String []args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        arr = new ArrayList[N+1];
        visited = new int[N+1];
        for(int i = 0;i<=N;i++){
            arr[i] = new ArrayList<>();
        }

        for(int i=0;i<M;i++){
            st= new StringTokenizer(br.readLine());
            int s = Integer.parseInt(st.nextToken());
            int e = Integer.parseInt(st.nextToken());
            arr[s].add(e);
        }
        int max =-1;
        ArrayList<Integer> ans = new ArrayList<>();
        for(int i = 0;i<=N;i++){
            bfs(i);
        }
        for(int i = 1; i<=N;i++){
            max = Math.max(visited[i], max);
        }

        for(int i = 1; i<=N;i++){
            if(max == visited[i]){
                System.out.print(i+" ");
            }
        }
    }

    public static void bfs(int start){
        check = new boolean[N+1];
        Queue<Integer> queue = new LinkedList<>();
        queue.add(start);
        check[start] = true;


        while (!queue.isEmpty()){
            int current = queue.poll();
            for(int k : arr[current]){
                if(!check[k]){
                    queue.add(k);
                    check[k] = true;
                    visited[k]++;
                }
            }
        }
    }

}