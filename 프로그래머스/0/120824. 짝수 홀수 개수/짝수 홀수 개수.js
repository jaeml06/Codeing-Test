function solution(num_list) {
    let answer = [];
    answer = num_list.reduce((pre, cur) => {
        if(cur % 2 === 0){
            pre[0] += 1
        } else {
            pre[1] += 1
        }
        return pre
        
        
    }, [0, 0]);
    return answer;
}