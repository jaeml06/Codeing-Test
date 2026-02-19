def solution(my_string):
    answer = 0
    for v in my_string:
        if v.isnumeric():
            answer += int(v)
    return answer