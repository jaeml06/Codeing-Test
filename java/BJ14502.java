import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

class Pos{
    int x;
    int y;
    public Pos(int x, int y){
        this.x =x;
        this.y = y;
    }
}

public class Main {
    static int N,M;
    static int dx[] = {-1, 1, 0, 0};
    static int dy[] = {0, 0, -1, 1};
    static int [][]data;
    static int [][]map;
    static int maxCount = 0;
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());

        data = new int[N][M];
        for(int i=0;i<N;i++){
            st = new StringTokenizer(br.readLine());
            for(int j = 0; j<M; j++){
                data[i][j] = Integer.parseInt(st.nextToken());
            }
        }
       dfs(0);
        System.out.println(maxCount);


    }
    public static void dfs(int height){
        if(height == 3){
            bfs();
            return;
        }
        for(int i=0;i<N;i++){
            for(int j=0;j<M;j++){
                if(data[i][j] == 0){
                    data[i][j] = 1;
                    dfs(height+1);
                    data[i][j] =0;
                }
            }
        }
    }
    public static void bfs(){
        Queue<Pos> queue = new LinkedList<>();
        map = new int[N][M];
        for(int i=0;i<N;i++){
            for(int j=0;j<M;j++){
                map[i][j] = data[i][j];
            }
        }
        for(int i=0;i<N;i++){
            for(int j=0;j<M;j++){
                if(map[i][j] == 2){
                    queue.add(new Pos(j, i));
                }
            }
        }
        while (!queue.isEmpty()){
            Pos current = queue.poll();
            for(int i=0;i<4;i++){
                int nextX = current.x +dx[i];
                int nextY = current.y + dy[i];
                if(nextX >=0 && nextX<M && nextY>=0 && nextY<N && map[nextY][nextX] == 0){
                    map[nextY][nextX] =2;
                    queue.add(new Pos(nextX, nextY));
                }
            }
        }
        int count = 0;
        for(int i = 0; i<N;i++){
            for(int j = 0; j<M;j++){
                if(map[i][j]==0){
                    count++;
                }
            }
        }
        maxCount = Math.max(count,maxCount);
    }
}
