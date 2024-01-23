function solution(str_list) {
    let answer = [];
    str_list.some((value, index) => {
        if(value === 'l'){
            answer = str_list.slice(0, index)
            return true;
        } else if (value === 'r'){
            answer = str_list.slice(index + 1)
            return true;
        }
    })
    return answer;
}