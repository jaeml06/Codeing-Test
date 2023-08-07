import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;
public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String arr1[] = br.readLine().split("");
        String arr2[] = br.readLine().split("");


        int data[][] = new int[arr2.length+1][arr1.length+1];


        for(int i =0; i<arr2.length+1;i++){
            for(int j = 0; j<arr1.length+1;j++){
                if(i==0 || j==0){

                } else if (arr1[j-1].equals(arr2[i-1])) {
                    data[i][j] = data[i-1][j-1] +1;
                }
                else{
                    data[i][j] = Math.max(data[i][j-1], data[i-1][j]);
                }

            }
        }

        System.out.println(data[arr2.length][arr1.length]);
    }
}