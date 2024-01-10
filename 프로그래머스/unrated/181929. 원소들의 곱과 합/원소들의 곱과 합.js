function solution(num_list) {
    const plus = num_list.reduce((pre, cur) => {
        return pre * cur;
    },);
    
    const square = num_list.reduce((pre, cur) => {
        return pre + cur;
    },0)**2;
    
    if(plus < square){
        return 1
    }
    return 0;
}