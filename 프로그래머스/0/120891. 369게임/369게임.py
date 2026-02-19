def solution(order):
    answer = 0
    for c in str(order):
        if c in '369':
            answer += 1
    return answer