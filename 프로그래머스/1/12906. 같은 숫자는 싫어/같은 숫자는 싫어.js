function solution(arr)
{
    const answer = []
    arr.forEach((value, index, arr) => {
        if(!index){
            answer.push(value)
        } else if(value !== answer[answer.length - 1]){
            answer.push(value);
        }
    })
    return answer;
}