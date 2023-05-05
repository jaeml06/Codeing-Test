import java.io.*;

public class BJ1463 {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int X = Integer.parseInt(br.readLine());

        int[] data = new int[X+1];

        for(int i=2; i<X+1;i++){
            data[i] = data[i-1]+1;

            if(i%3==0){
                data[i] = Math.min(data[i], data[i/3]+1);
            }
            if(i%2==0){
                data[i] = Math.min(data[i], data[i/2]+1);
            }
        }
        System.out.println(data[X]);
    }
}