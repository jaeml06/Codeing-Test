function solution(num_list, n) {
    let answer = [];
    let list = [...num_list];    
    while(list.length){
        answer.push(list.splice(0, n));
    }
    return answer;
}