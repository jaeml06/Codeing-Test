def solution(name, yearning, photo):
    answer = []
    grade = {}
    for val1, val2 in zip(name, yearning):
        grade[val1] = val2
    
    for arr in photo:
        temp = 0
        for n in arr:
            temp += grade.get(n, 0)
        answer.append(temp)
    return answer