import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Solution {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        int N = Integer.parseInt(br.readLine());
        PriorityQueue<Integer> pq = new PriorityQueue();
        for(int i = 0;i<N;i++){
            int m = Integer.parseInt(br.readLine());
            pq.offer(m);
        }
        int sum=0;
        int data[] = new int[N-1];
        int total=0;

        /*if(N==1) {
            System.out.println(pq.poll());
        }*/ // N이 1일때 비교횟수는 0이다...
        {
            while(pq.size()>1){
                sum = pq.poll()+ pq.poll();
                total+=sum;
                pq.add(sum);
            }
            System.out.println(total);
        }
    }
}
