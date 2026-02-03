import math

def solution(number, limit, power):
    def count_d(n):
        cnt = 0
        for i in range(1, math.isqrt(n) + 1):
            if n % i == 0:
                cnt += 1 if i * i == n else 2
        return cnt
    answer = 0
    for i in range(1, number + 1):
        cnt = count_d(i)
        if cnt > limit:
            cnt = power
        answer += cnt
    return answer