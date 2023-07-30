import java.util.LinkedList;
import java.util.Queue;
class Solution {
    int dx[] =new int[]{-1,1,0,0};
    int dy[] =new int[]{0,0,-1,1};
    int sum=0;
    String path[][];
    public int solution(String[] maps) {

        path= new String[maps.length][maps[0].length()];
        for(int i = 0; i<maps.length;i++){
            path[i] = maps[i].split("");
        }
        for(int i = 0;i<maps.length;i++){
            for(int j = 0;j<path[i].length;j++){
                if(path[i][j].equals("S")){
                    int count1 =bfs(j,i, "L");
                    if(count1==-1){
                        return -1;
                    }

                    sum+=count1;
                }
                if(path[i][j].equals("L")){
                    int count2 = bfs(j,i, "E");
                    if(count2==-1){
                        return -1;
                    }
                    sum+=count2;
                }
            }
        }

        return sum;
    }
    public int bfs(int x, int y, String K){
        boolean[][] visited = new boolean[path.length][path[0].length];
        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[]{x, y, 0});

        while(!queue.isEmpty()){
            int pos[] = queue.poll();
            int posX = pos[0];
            int posY = pos[1];
            int count = pos[2];
            visited[posY][posX] = true;

            if(path[posY][posX].equals(K)){
                return count;
            }
            for(int i =0; i<4;i++){
                int nextPosX = posX + dx[i];
                int nextPosY = posY + dy[i];

                if(nextPosX>=0 && nextPosX<path[0].length && nextPosY>=0 && nextPosY<path.length && !visited[nextPosY][nextPosX] && !path[nextPosY][nextPosX].equals("X")){

                    visited[nextPosY][nextPosX] = true;
                    queue.add(new int[]{nextPosX, nextPosY , count+1});

                }
            }
        }
        return -1;
    }
}