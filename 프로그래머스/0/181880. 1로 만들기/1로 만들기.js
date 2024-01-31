function solution(num_list) {
    var answer = 0;
    num_list.forEach((value) => {
        while(value > 1){
            if(value % 2 === 0){
                value /= 2;
            } else{
                value = (value-1) / 2;
            }
            answer++;
        }
    })
    return answer;
}