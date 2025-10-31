def solution(a, b):
    answer = 0
    for i, val in enumerate(a):
        answer += val * b[i]
    return answer