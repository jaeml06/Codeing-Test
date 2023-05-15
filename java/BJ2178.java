import java.io.*;

import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class BJ2178 {
    static int N;
    static int M;
    static int[][] map;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());

        map=new int[N][M];
        for(int i=0; i<N; i++){
            String data = br.readLine();
            for(int j=0; j<M; j++){
                map[i][j] = data.charAt(j)-'0';
            }
        }

        bfs(0,0);
        System.out.println(map[N-1][M-1]);
    }
    public static void bfs(int x, int y) {
        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[] {x,y}); // 무명 배열

        int dx[] = new int[]{-1,1,0,0};
        int dy[] = new int[]{0,0,-1,1};

        while(!queue.isEmpty()){
            int pos[] = queue.poll();
            int posX = pos[0];
            int posY = pos[1];

            for(int i=0;i<4;i++){
                int nextPosX = posX + dx[i];
                int nextPosY = posY + dy[i];

                if(nextPosX>=0 && nextPosX<N && nextPosY>=0 && nextPosY<M && map[nextPosX][nextPosY]==1){
                    queue.add(new int[]{nextPosX,nextPosY});
                    map[nextPosX][nextPosY] = map[posX][posY] + 1;
                }
            }

        }


    }
}