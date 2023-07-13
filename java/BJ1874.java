import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Solution {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        int n = Integer.parseInt(br.readLine());
        int data[] = new int[n+1];
        for(int i=1;i<=n;i++){
            data[i] = Integer.parseInt(br.readLine());
        }
        Stack<Integer> st = new Stack<>();
        int temp =1;
        for(int i = 1;i<=n;i++){
            st.push(i);
            sb.append("+").append("\n");
            while (!st.empty() && st.peek() == data[temp]){
                st.pop();
                sb.append("-").append("\n");
                temp++;
            }

        }
        if(!st.empty()){
            System.out.println("NO");
        }
        else{
            System.out.println(sb);
        }

    }
}
