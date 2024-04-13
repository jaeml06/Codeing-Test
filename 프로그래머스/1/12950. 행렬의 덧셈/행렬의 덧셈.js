function solution(arr1, arr2) {
    var answer = [];
    arr1.forEach((value1, index) => {
        const value2 = arr2[index]
            const arr =[]
            value1.forEach((a, index) => {
                arr.push(a + value2[index]);
            })
            answer.push(arr)

    })
    return answer;
}