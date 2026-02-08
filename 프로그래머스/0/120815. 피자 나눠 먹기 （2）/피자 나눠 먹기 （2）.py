def solution(n):
    a, b = n, 6
    while b:
        a, b = b, a % b
    gcd_val = a
    answer = n // gcd_val
    return answer