def solution(n, k):
    answer = 0
    answer += 12_000 * n
    answer += 2_000 * k
    answer -= 2_000 * (n//10)
    return answer