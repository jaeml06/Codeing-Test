function solution(num_list, n) {
    let answer = num_list.reduce((pre, cur, index) => {
        if(index % n === 0){
            pre.push(cur);
        }
        return pre;
    }, []);
    return answer;
}