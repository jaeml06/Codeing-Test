import java.io.*;
import java.util.*;

public class BJ1932 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        int [][]data = new int[n][];
        for(int i =0; i<n;i++){
            data[i] = new int[i+1];
        }
        for(int i=0;i<n;i++){
            StringTokenizer st = new StringTokenizer(br.readLine());
            for(int j=0;j<i+1;j++){
                data[i][j]= Integer.parseInt(st.nextToken());
            }
        }
        int num =2;
        for(int i =1;i<n;i++){
            for(int j = 0; j<num;j++){
                if(j==0){
                    data[i][j] = data[i][j] + data[i-1][j];
                }
                else if (i==j) {
                    data[i][j] = data[i][j] + data[i-1][j-1];
                }
                else{
                    data[i][j] = data[i][j] + Math.max(data[i-1][j], data[i-1][j-1]);
                }
            }
            num++;
        }
        System.out.println(Arrays.stream(data[n-1]).max().getAsInt());




    }
}