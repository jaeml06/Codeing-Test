function solution(progresses, speeds) {
    const answer = [];
    const days = [];
    for(const [index, progress] of progresses.entries()){
        let num = progress
        let day = 0
        while(num + speeds[index] < 100){
            num += speeds[index]
            day++
        }
        days.push(day)
    }
    
    while(days.length !== 0){
        let count = 1
        let temp = days.shift()
        while(temp >= days[0]){
            days.shift()
            count++
        }
        answer.push(count)
    }
    return answer;
}