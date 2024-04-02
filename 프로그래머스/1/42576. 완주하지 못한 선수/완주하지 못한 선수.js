function solution(participant, completion) {
    let answer = '';
    const map = new Map();
    
    completion.forEach((value) => {
        map.set(value, map.get(value) + 1 || 1);
    })
    participant.some((value) => {
        if(map.get(value) >= 1){
            map.set(value, map.get(value)-1);
            return false;
        }
        answer = value;
        return false;
    })
    return answer;
}