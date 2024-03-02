function solution(strings, n) {
    var answer = strings.sort((a, b) => {
        if(a[n].charCodeAt() - b[n].charCodeAt() === 0){
           if(a < b){
               return -1;
           } else if(a === b){
               return 0;
           }
            return 1;
        }
        return a[n].charCodeAt() - b[n].charCodeAt()
    })
    return answer;
}