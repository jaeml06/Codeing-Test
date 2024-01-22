function solution(num_list) {
    let answer = -1;
    num_list.some((value, index) => {
        if(value < 0){
            answer = index;
            return true;
        }
    })
    return answer;
}