
import java.io.*;


public class BJ2275 {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        int T = Integer.parseInt(br.readLine());



        int [][] table = new int[15][15];
        for(int i=1;i<15;i++){
            table[0][i]=i;
        }
        for(int i=1;i<15;i++){
            for(int j=1;j<15;j++){
                if(j==1){
                    table[i][j]=1;
                }
                else{
                    table[i][j]=table[i-1][j] + table[i][j-1];
                }

            }

        }
        while(T--!=0){
            int k = Integer.parseInt(br.readLine());
            int n = Integer.parseInt(br.readLine());

            sb.append(table[k][n]).append("\n");
        }
        System.out.println(sb);

    }
}