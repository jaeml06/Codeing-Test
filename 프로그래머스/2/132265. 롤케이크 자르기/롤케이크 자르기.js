function solution(topping) {
    let answer = 0
    const left = new Array(topping.length).fill(0)
    const right = new Array(topping.length).fill(0)
    
    const leftSet = new Set()
    const rightSet = new Set()
    
    for(let i = 0; i< topping.length; i++){
        leftSet.add(topping[i]);
        left[i] = leftSet.size;
    }
    
    for(let i = topping.length - 1; i >= 0; i--){
        rightSet.add(topping[i]);
        right[i] = rightSet.size;
    }
    console.log(left, right)
    for(let i = 0; i < topping.length-1; i++){
        if(left[i] === right[i + 1]){
            answer++
        }
    }
    return answer
}