function solution(my_string) {
    let answer = Array.from({length:52}, ()=>{return 0});
    [...my_string].forEach((value) => {
        let temp = Number(value.charCodeAt());
        if(temp>= 65 && temp <= 90){
            answer[temp - 65] += 1; 
        } else {
            answer[temp - 71] += 1
        }
        
    })
    return answer;
}