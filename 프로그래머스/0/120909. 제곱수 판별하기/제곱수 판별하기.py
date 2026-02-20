def solution(n):
    answer = 0
    i = 1
    while i ** 2 <= n:
        if i ** 2 == n:
            return 1
        i += 1
    return 2