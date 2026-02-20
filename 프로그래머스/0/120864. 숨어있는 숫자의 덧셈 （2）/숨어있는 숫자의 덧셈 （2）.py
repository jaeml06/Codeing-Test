def solution(my_string):
    temp = ''
    answer = 0
    for v in my_string:
        if v.isnumeric():
            temp += v
        else:
            if temp != '':
                answer += int(temp)
                temp = ''
    if temp != '':
        answer += int(temp)
    return answer