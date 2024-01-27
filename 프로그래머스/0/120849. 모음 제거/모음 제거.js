function solution(my_string) {
    let answer = '';
    const gather = ['a', 'e', 'i', 'o', 'u'];
    answer = [...my_string].reduce((pre, cur) => {
        if(!gather.includes(cur)){
            pre.push(cur);
        }
        return pre
    }, []).join('')
    return answer;
}