function solution(answers) {
    const answer =[]
    const count = [0, 0, 0];
    const supo = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]];
    answers.forEach((value, index) => {
        supo.forEach((v, i) => {
            if(value === v[index % v.length]){
                count[i] += 1;
            }
        })
    });
    const max = Math.max(...count)
    count.forEach((value, index) => {
        if(value === max){
            answer.push(index+1)
        }
    })
    return answer;
}