function solution(s) {
    var answer = false;
    if(s.length === 4 || s.length === 6){
       return [...s].every((value) => {
        return !Number.isNaN(Number(value))
    })
       }
    return false;
}