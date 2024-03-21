function solution(n, lost, reserve) {
    let answer = 0;
    
    lost.sort((a,b) => a - b);
    reserve.sort((a,b) => a - b);
    const arr = Array.from({length: n}, () => true);
    lost.forEach((value) => {
        if(!reserve.includes(value)){
            arr[value-1] = false;
        }

    });
    
    reserve.map((value) => {
        if(!lost.includes(value)){
            return value;
        }
    }).forEach((value) => {
        if(!arr[value - 1] && lost.includes(value)){
            arr[value - 1] = true;
            return;
        }
        if(value !== 1){
            if(!arr[value-2]){
                arr[value-2] = true;
                return;
            }
        }
        if(value !== n){
            if(!arr[value]){
                arr[value] = true;
                return;
            }
        }
        
    })

    return arr.filter(value => value === true).length;
}
