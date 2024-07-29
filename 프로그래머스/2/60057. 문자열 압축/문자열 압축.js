function solution(s) {
    let answer = s.length;
    
    for(let i = 1; i <= Math.floor(s.length / 2); i++){
        let str = '';
        for(let j = 0; j < s.length; j += i){
            let count = 1
            while(s.slice(j, j+i) === s.slice(j+i, j+i+i)){
                j+=i
                count+= 1
            }
            if(count > 1){
                str += count
            }
            str += s.slice(j, j+i)
        }
        answer = Math.min(answer, str.length);
    }
    return answer;
}