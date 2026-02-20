def solution(n, numlist):
    answer = []
    for v in numlist:
        if v % n == 0:
            answer.append(v)
    return answer