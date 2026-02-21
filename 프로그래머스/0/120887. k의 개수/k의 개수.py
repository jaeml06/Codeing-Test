def solution(i, j, k):
    answer = 0
    for c in range(i, j + 1):
        for s in str(c):
            if str(k) == s:
                answer += 1
    return answer