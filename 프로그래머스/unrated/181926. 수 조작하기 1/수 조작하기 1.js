function solution(n, control) {
    let answer = n;
    const arr = Array.from(control);
    arr.forEach((value) => {
        switch(value){
            case 'w': answer += 1;
                break;
            case 's': answer -= 1;
                break;
            case 'd': answer += 10;
                break;
            case 'a': answer -= 10;
        }
    })
    return answer;
}