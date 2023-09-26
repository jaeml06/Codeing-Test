import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;


public class Main {
    static boolean data[] = new boolean[10];

    public static void main(String []args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        int M = Integer.parseInt(br.readLine());

        if (M != 0) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            for (int i = 0; i < M; i++) {
                data[Integer.parseInt(st.nextToken())] = true;
            }
        }
        int ans =  Math.abs(N-100);
        for(int i = 0;i<999_999;i++){
            boolean flag = false;
            String str = Integer.toString(i);
            for(int j = 0;j<str.length() && !flag;j++){
                flag = data[str.charAt(j) - '0'];
            }

            if (!flag){
                ans = Math.min(ans, str.length() + Math.abs(N-i));
            }
        }
        System.out.println(ans);
    }
}
