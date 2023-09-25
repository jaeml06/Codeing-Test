import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;


public class Main {
    static boolean []broken = new boolean[10];
    public static void main(String []args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        int M = Integer.parseInt(br.readLine());
        StringTokenizer st;
        if(M!=0){
            st = new StringTokenizer(br.readLine());
            for(int i=0;i<M;i++){
                broken[Integer.parseInt(st.nextToken())] = true;
            }
        }


        int ans = Math.abs(100-N);

        for(int i=0;i<=999999;i++){

            String cur = Integer.toString(i);
            boolean check=false;

            for(int j=0;j<cur.length();j++){
                if(broken[cur.charAt(j) - '0']){
                    check=true;
                    break;
                }
            }
            if(!check){
                ans = Math.min(ans,cur.length()+Math.abs(i-N));
            }

        }
        System.out.println(ans);

    }
}