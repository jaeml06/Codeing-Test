function solution(a, b, c, d) {
    let answer = 0;
    const map = new Map();
    [a,b,c,d].forEach((value) => {
        map.set(value, (map.get(value) || 0) + 1);
    });
    let arr = [...map.entries()].sort((a,b) => b[1] - a[1]);
    if(arr[0][1] === 4){
       answer = arr[0][0] * 1111;
    } else if(arr[0][1] === 3){
        answer = (10 * arr[0][0] + arr[1][0])**2;
    } else if(arr[0][1] === 2 && arr.length === 2){
        answer = (arr[0][0] + arr[1][0])*Math.abs(arr[0][0] - arr[1][0]);
    } else if(arr[0][1] === 2){
        answer = arr[1][0] * arr[2][0]
    } else {
        answer = Math.min(a,b,c,d)
    }
    return answer;
}