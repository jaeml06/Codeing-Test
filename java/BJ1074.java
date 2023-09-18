import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;


public class Main {
    static int cnt = 0;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int r = Integer.parseInt(st.nextToken());
        int c = Integer.parseInt(st.nextToken());

        count(N, r, c);
        System.out.println(cnt);

    }
    public static void count(int N, int r, int c){
        if(N == 0){
            return;
        }
        int k = (int)Math.pow(2, N);
        if(r < k/2 && c < k/2){
            count(N-1,r,c);
        } else if (r>= k/2 && c < k/2) {
            cnt += Math.pow(2, 2*(N-1))*2;
            count(N-1, r - k/2, c);
        } else if (r< k/2 && c>= k/2) {
            cnt += Math.pow(2, 2*(N-1)) * 1;
            count(N-1, r, c - k/2);
        } else if (r>= k/2 && c>= k/2) {
            cnt += Math.pow(2, 2*(N-1)) * 3;
            count(N-1, r - k/2, c - k/2);
        }
    }

}