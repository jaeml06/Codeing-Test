import java.io.*;

import java.util.PriorityQueue;

public class BJ1927 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        PriorityQueue<Integer> queue = new PriorityQueue<>(); //낮은 숫자 순으로 우선순위 결정
        //PriorityQueue<Integer> queue = new PriorityQueue<>(Collections.reverseOrder()); //높은 숫자 순으로 우선순위 결정

        int N = Integer.parseInt(br.readLine());

        for(int i = 0; i<N; i++){
            int data = Integer.parseInt(br.readLine());

            if(data == 0){
                if(queue.isEmpty()){
                    System.out.println("0");
                }
                else{
                    System.out.println(queue.poll());
                }
            }
            else{
                queue.add(data);
            }
        }
    }
}