import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;


public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine());
        long data[] = new long[100];
        while(T-- >0){
            int N = Integer.parseInt(br.readLine());
            ;
            if(N==1){
                System.out.println(1);
            } else if (N==2) {
                System.out.println(1);
            } else if (N==3) {
                System.out.println(1);
            } else{
                data[0]=1;
                data[1]=1;
                data[2]=1;
                for(int i = 3;i<N;i++){
                    data[i] = data[i-3] + data[i-2];
                }
                System.out.println(data[N-1]);
            }
        }
    }
}