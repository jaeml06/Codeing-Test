function solution(num_list) {
    let answer = 0;
    let even = 0;
    let odd = 0;
    num_list.forEach((value, index) => {
        if((index + 1) % 2 === 0){
            odd += value;
        } else {
            even += value;
        }
    })
    answer = Math.max(odd, even)
    return answer;
}