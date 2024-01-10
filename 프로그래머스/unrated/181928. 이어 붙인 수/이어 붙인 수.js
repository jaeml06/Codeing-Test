function solution(num_list) {
    var answer = 0;
    let odd = '';
    let even = '';
    num_list.forEach((value) => {
        if(value % 2 === 0){
            even += value;
        } else {
            odd += value;
        }
    });
    answer = Number.parseInt(even) + Number.parseInt(odd);
    return answer;
}