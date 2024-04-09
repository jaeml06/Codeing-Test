function solution(babbling) {
    var answer = 0;
    const can = ["aya", "ye", "woo", "ma"];
    babbling.forEach((word) => {
        let wordString = word;
        let canArr = [...can];
        let flag = true;
        let cur = ''
        const flag2 = canArr.some(value => {
            if(wordString.includes(value + value)){
                    return true;
                }
            return false;
        })
        while(flag){
            flag = canArr.some(value => {
                
                if(wordString.includes(value)){
                    console.log(wordString)
                    wordString = wordString.replace(value, ' ');
                    cur = value;
                    return true
                }
                return false;
            })
            // canArr = [...can];
            // canArr = canArr.filter(value => value !==cur)
        }
        console.log(flag2)
        if(wordString.trim().length === 0 && !flag2){
            answer++;
        }
    })
    console.log(answer)
    return answer;
}