function solution(score) {
    const answer = [];
    const average = score.map((value) => {
        return (value[0] + value[1]) / 2;
    });
    const set = [...new Set([...average])].sort((a, b) => b- a);
    let count = 1;
    set.forEach((aver) => {
        let cont = 0;
        average.forEach((value, index) => {
            if(aver === value){
                answer[index] = count;
                cont++;
            }
        })
        count+= cont;
        
    })
    return answer;
}