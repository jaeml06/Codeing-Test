function solution(my_string, queries) {
    var answer = my_string;
    queries.forEach(([s, e]) => {
        let temp = '';
        let index = 0;
        const rev =  answer.slice(s,e+1).split('').reverse()
        for(let i = 0; i< answer.length; i++){
            if(i >= s && i <= e){
                temp += rev[index++];
                continue;
            }
            temp += answer[i];
        }
        answer = temp;
    })
    return answer;
}