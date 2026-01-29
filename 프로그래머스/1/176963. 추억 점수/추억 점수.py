def solution(name, yearning, photo):
    answer=[]
    missing_grade = {}
    for n, y in zip(name, yearning):
        missing_grade[n] = y
    
    for arr in photo:
        temp = 0
        for n in arr:
            temp += missing_grade.get(n, 0)
        answer.append(temp)
    return answer