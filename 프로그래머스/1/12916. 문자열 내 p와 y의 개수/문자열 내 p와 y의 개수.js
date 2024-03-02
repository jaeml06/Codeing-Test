function solution(s){
    var answer = true;
    let [p ,y] = [0, 0];
    [...s].forEach((value) => {
        switch(value.toLowerCase()){
            case 'p':
                p++;
                break;
            case 'y':
                y++;
                break;
        }
    })
    if(p !== y) return false;

    return answer;
}