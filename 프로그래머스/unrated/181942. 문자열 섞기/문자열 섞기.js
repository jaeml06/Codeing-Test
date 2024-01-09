function solution(str1, str2) {
    var answer = '';
    
    for(let i = 0; i< str1.length + str2.length; i++){
        if(i % 2 === 0){
            answer += str1[parseInt(i/2)];
        }else{
            answer += str2[parseInt(i/2)];
        }
    }
    return answer;
}