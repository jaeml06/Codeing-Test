import java.io.*;
import java.util.Arrays;

public class BJ11651 {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        int[][] pos = new int[N][2];

        for(int i = 0; i < N; i++) {
            String[] posi = br.readLine().split(" ");
            pos[i][0] = Integer.parseInt(posi[0]);
            pos[i][1] = Integer.parseInt(posi[1]);
        }

        Arrays.sort(pos, (a1, a2) -> {
            if(a1[1] == a2[1]) {
                return a1[0] - a2[0];
            } else {
                return a1[1] - a2[1];
            }
        });

        StringBuilder sb = new StringBuilder();
        for(int i = 0 ; i< N ; i++) {
            sb.append(pos[i][0] + " " + pos[i][1]).append('\n');
        }
        System.out.println(sb);
    }
}