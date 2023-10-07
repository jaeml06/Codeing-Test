import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;


public class Main {
    static int A;
    static int B;
    static long total=0;

    static boolean flag = false;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        A = Integer.parseInt(st.nextToken());
        B = Integer.parseInt(st.nextToken());

        dfs(A, 1);

        if(flag){
            System.out.println(total);
        }
        else {
            System.out.println(-1);
        }

    }

    public static void dfs(long currnet, int count) {
        if(currnet > B){
            return;
        }
        if(currnet == B) {
            total = count;
            flag = true;
            return;
        }

        dfs(currnet*2, count+1);
        dfs(currnet*10+1, count+1);
    }

}