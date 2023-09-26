import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

class Pos{
    int x;
    int y;

    public Pos(int x, int y){
        this.x = x;
        this.y = y;
    }
}
public class Main {
    static int dx[] = {-1, 1, 0, 0};
    static int dy[] = {0, 0, -1, 1};
    static char [][]arr;
    static int R;
    static int C;
    static int S = 0;
    static int max = 0;

    public static void main(String []args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        R = Integer.parseInt(st.nextToken());
        C = Integer.parseInt(st.nextToken());

        arr = new char[R][C];


        for(int i=0;i<R;i++){
            arr[i] = br.readLine().toCharArray();
        }
        dfs(0, 0 , 0);
        System.out.println(max);
    }

    public static void dfs(int x, int y, int count){
        if((S&(1<<arr[y][x] - 'A'))!=0){
            max = Math.max(max, count);
            return;
        }
        else{
            S |= (1<<arr[y][x] - 'A');
            for(int i=0;i<4;i++){
                int nextX = x + dx[i];
                int nextY = y + dy[i];

                if(nextX>=0 && nextX<C && nextY>=0 && nextY<R){
                    dfs(nextX, nextY, count+1);
                }

            }
            S &= ~(1<<arr[y][x]-'A');
        }
    }
}
