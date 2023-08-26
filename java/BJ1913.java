import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main{

    static int graph[][];
    static boolean[] visited;
    static int N,M;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int pos = Integer.parseInt(br.readLine());
        int data[][] = new int[N][N];

        int x = N/2;
        int y = N/2;
        int value = 1;
        int size = 1;
        while(true){
            for(int i=0;i<size;i++){
                data[y--][x] = value++;
            }
            if(value-1 == N*N){
                break;
            }
            for(int i=0;i<size;i++){
                data[y][x++] = value++;
            }
            size++;
            for(int i=0;i<size;i++){
                data[y++][x] = value++;
            }

            for(int i=0;i<size;i++){
                data[y][x--] = value++;
            }
            size++;
        }
        int posX = 0;
        int posY = 0;
        StringBuilder sb = new StringBuilder();
        for(int i = 0;i<N;i++){
            for(int j=0;j<N;j++){
                if(pos == data[i][j]){
                    posX = j+1;
                    posY = i+1;
                }
                sb.append(data[i][j]+ " ");
            }
            sb.append("\n");
        }
        System.out.print(sb);
        System.out.println(posY + " " + posX);


    }
}
