import math
def solution(n):
    x = math.isqrt(n)
    if x * x == n:            
        return (x + 1) ** 2    
    return -1