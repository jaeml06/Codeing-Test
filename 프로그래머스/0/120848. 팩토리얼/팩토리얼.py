def solution(n):
    fact = 1
    k = 1
    while fact * k <= n:
        fact *= k
        k += 1
    
    return k - 1