function solution(priorities, location) {
    let answer = 0;
    const arr = Array.from(priorities, (priority, index) => [priority, index]);
    const temp = []
    while(arr.length !== 0){
        const [priority, index] = arr.shift()
        if(priority < Math.max(...arr.map(item => item[0]))){
            arr.push([priority, index])
        } else {
            temp.push(index)
        }
    }
    console.log(temp)
    for(let i = 0; i < temp.length; i++){
        if(temp[i] === location){
            answer = i
        }
    }
    return answer + 1;
}