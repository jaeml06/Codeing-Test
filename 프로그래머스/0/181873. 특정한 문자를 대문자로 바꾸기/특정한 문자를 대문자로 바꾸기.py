def solution(my_string, alp):
    answer = ''
    for val in my_string:
        if val == alp:
            answer += val.upper()
        else:
            answer += val
    return answer