def solution(n, m):
    a, b = n, m
    while b:
        a, b = b, a % b
    gcd = a
    lcm = n * m // gcd
    return [gcd, lcm]