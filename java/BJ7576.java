import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;
public class Main {
    static int dx[] = {-1,1,0,0};
    static int dy[] = {0,0,-1,1};
    static int M,N;
    static int table[][];
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        M = Integer.parseInt(st.nextToken());
        N = Integer.parseInt(st.nextToken());

        table = new int[N][M];
        for(int i=0; i<N;i++){
            st = new StringTokenizer(br.readLine());
            for(int j=0;j<M;j++){
                table[i][j] = Integer.parseInt(st.nextToken());
            }
        }
        int count =0;
        for(int i = 0;i<N;i++){
            for(int j = 0;j<M;j++){
                if(table[i][j]==0){
                    count++;
                }
            }
        }
        if(count==0){
            System.out.println(0);
            return;
        }
        bfs();
        int max =-2;
        for(int i = 0;i<N;i++){
            for(int j = 0;j<M;j++){
                if(table[i][j]==0){
                    System.out.println(-1);
                    return;
                }
                max = Math.max(max, table[i][j]);

            }
        }
        System.out.println(max-1);
    }
    public static void bfs(){
        Queue<int[]> queue = new LinkedList<>();
        for(int i = 0;i<N;i++){
            for(int j = 0;j<M;j++){
                if(table[i][j]==1){
                    queue.add(new int[]{j, i});
                }
            }
        }
        while (!queue.isEmpty()){
            int pos[] = queue.poll();
            int x = pos[0];
            int y = pos[1];
            for(int i = 0; i<4;i++){
                int nx = x + dx[i];
                int ny = y + dy[i];
                if(nx>=0 && nx<M && ny>=0 && ny<N){
                    if(table[ny][nx] == 0){
                        queue.add(new int[]{nx, ny});
                        table[ny][nx] = table[y][x] +1;
                    }
                }
            }
        }
    }
}