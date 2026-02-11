def solution(n):
    answer = 0
    i = 1
    while i * i <= n:
        if n % i == 0:
            if i * i == n:
                answer += 1
            else:
                answer += 2
        i += 1
    return answer