import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;
public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine());
        while (T-- > 0){
            int sum = 0;
            long ans = 0;
            int N = Integer.parseInt(br.readLine());
            int data[] = new int[N];
            StringTokenizer st = new StringTokenizer(br.readLine());
            for(int i = 0;i<N;i++){
                data[i] = Integer.parseInt(st.nextToken());
            }
            int line = data[N-1];
            for(int i= N-2; i>=0;i--){
                if(data[i]< line ){
                    ans+=line - data[i];
                }
                else{
                    line = data[i];
                }

            }
            System.out.println(ans);
        }
    }
}