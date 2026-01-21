def solution(a, b):
    answer = 0
    s = a if a < b else b
    e = b if a < b else a
    for i in range(s, e + 1):
        answer += i
    return answer
        