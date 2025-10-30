def solution(s):
    index = len(s) // 2
    answer = ''
    if len(s) % 2 == 0:
        answer = s[index-1] + s[index]
    else:
        answer = s[index]
    return answer