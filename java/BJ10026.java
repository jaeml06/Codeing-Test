import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

class Pos{
    int x,y;
    public Pos(int x, int y){
        this.x = x;
        this.y = y;
    }
}
public class Main {
    static int N;
    static char [][] data;
    static boolean [][] visited;
    static int [] dx = {-1, 1, 0, 0};
    static int [] dy = {0, 0, -1, 1};
    public static void main(String []args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine());
        data = new char[N][N];

        for (int i = 0; i < N; i++) {
            String temp = br.readLine();
            for (int j = 0; j < N; j++) {
                data[i][j] = temp.charAt(j);
            }
        }
        visited = new boolean[N][N];

        int count = 0;
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                if (!visited[i][j]) {
                    bfs(j, i);
                    count++;
                }
            }
        }

        System.out.print(count + " ");

        visited = new boolean[N][N];
        count = 0;
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                if (data[i][j] == 'G') {
                    data[i][j] = 'R';
                }
            }
        }

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                if (!visited[i][j]){
                    bfs(j, i);
                    count++;
                }
            }
        }
        System.out.println(count);
    }

    public static void bfs(int x, int y){
        Queue<Pos> queue = new LinkedList<>();
        queue.add(new Pos(x, y));
        visited[y][x] = true;
        char color = data[y][x];

        while (!queue.isEmpty()){
            Pos currentPos = queue.poll();
            for(int i =0; i<4; i++){
                int currentX = currentPos.x + dx[i];
                int currentY = currentPos.y + dy[i];

                if(currentX>= 0 && currentX<N && currentY>=0 && currentY<N && !visited[currentY][currentX] && data[currentY][currentX] == color ){
                    queue.add(new Pos(currentX,currentY));
                    visited[currentY][currentX] = true;
                }
            }
        }

    }
}