function solution(arr) {
    let stk = [];
    let i = 0;
    while(i < arr.length){
        if(stk.length === 0){
            stk.push(arr[i]);
            i+=1;
        }
        else if(stk[stk.length-1] < arr[i]){
            stk.push(arr[i]);
            i+=1;
        }
        else{
            stk.pop();
        }
    }
    return stk;
}