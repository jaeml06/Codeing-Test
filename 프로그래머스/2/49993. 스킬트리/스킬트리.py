def solution(skill, skill_trees):
    answer = 0

    for skill_tree in skill_trees:
        temp = ''
        for c in skill_tree:
            if c in skill:
                temp += c
        if temp == skill[:len(temp)]:
            answer += 1
    
    return answer