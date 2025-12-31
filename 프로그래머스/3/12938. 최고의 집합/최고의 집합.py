def solution(n, s):
    if s < n:
        return [-1]
    base = s // n
    rest = s % n
    
    result = [base] * n
    for i in range(rest):
        result[n-1-i] += 1
    return result