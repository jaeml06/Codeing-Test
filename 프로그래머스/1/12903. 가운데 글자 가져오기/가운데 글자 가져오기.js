function solution(s) {
    let answer = '';
    if(s.length % 2 === 0){
        return s.substr(parseInt(s.length/2)-2 + 1,2)
    }
    return s.substr(parseInt(s.length/2), 1);
}