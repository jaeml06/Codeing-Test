import java.io.*;

import java.util.*;

public class BJ11286 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        int []data = new int[N];

        for(int i=0; i<N;i++){
            data[i] = Integer.parseInt(br.readLine());
        }
        PriorityQueue<Integer> queue = new PriorityQueue<Integer>(new Comparator<Integer>() {
            @Override
            public int compare(Integer o1, Integer o2) {
                //절대값 기준으로 앞 값이 더 크다면 자리를 바꿔준다.
                if(Math.abs(o1) > Math.abs(o2)) {
                    return Math.abs(o1) - Math.abs(o2);
                    //절대값 기준으로 두 값이 같다면 음수를 앞으로 보내준다.
                }else if(Math.abs(o1) == Math.abs(o2)) {
                    return o1 - o2;
                }else {
                    return -1;
                }
            }
        });
        /*PriorityQueue<Integer> queue = new PriorityQueue<>(
                (o1, o2) -> {
                    if (Math.abs(o1) == Math.abs(o2)) { //절댓값이 같은 경우
                        return o1 > o2 ? 1 : -1;
                        //o1이 더 크다면 양수 반환 -> o1과 o2의 자리를 바꾼다
                        //o1이 더 작다면 음수 반환 -> 지금의 자리를 유지한다
                    } else { //절댓값이 같지 않은 경우 절댓값이 작은 순서로 정렬한다
                        return Math.abs(o1) - Math.abs(o2);
                        //양수가 반환되면 o1의 절댓값이 더 큰 경우이다 -> o2, o1순으로 정렬
                        //음수가 반환되면 o2의 절대값이 더 큰 경우이다 -> o1, o2 유지
                    }
                }
        );*/

        for(int i = 0;i<N;i++){
            if(data[i] == 0){
                if(queue.isEmpty()){
                    System.out.println(0);
                }
                else{
                    System.out.println(queue.poll());
                }
            }
            else{
                queue.add(data[i]);
            }
        }

    }
}