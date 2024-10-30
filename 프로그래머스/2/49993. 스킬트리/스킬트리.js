function solution(skill, skill_trees) {
    let answer = 0;
    const arr = skill_trees.map(skill_tree => [...skill_tree].filter((skill1) => skill.includes(skill1)));
    arr.forEach((value) => {if(skill.startsWith(value.join(''))) answer++})
    return answer;
}