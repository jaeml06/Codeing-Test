import java.util.*;
class Solution {
    public int solution(int k, int[] tangerine) {
        int answer=0;
        ArrayList<Integer> arr =new ArrayList<>();

        Arrays.sort(tangerine);

        int count = 0;
        for(int i = 0; i< tangerine.length;i++){
            count+=1;
            if((i == tangerine.length-1 && count>0)|| (tangerine[i] != tangerine[i+1] && i < tangerine.length -1)){
                arr.add(count);
                count=0;
            }
        }

        Collections.sort(arr, Collections.reverseOrder());

        for(int i=0; i<arr.size() && k>0;i++){
            answer+=1;
            k-=arr.get(i);

        }
        return answer;
    }
}