function solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => b - a);
    let i = 0;
    let j = people.length - 1;

    while (i <= j) {
        if (people[i] + people[j] <= limit) {
            j--;
        }
        i++;
        answer++;
    }

    return answer;
}