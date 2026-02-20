def solution(n):
    n = str(n)
    answer = 0
    for v in n:
        answer += int(v)
    return answer