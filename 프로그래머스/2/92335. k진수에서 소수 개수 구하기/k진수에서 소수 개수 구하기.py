def to_base(n, k):
    res = ''
    while n > 0:
        res = str(n % k) + res
        n //= k
    return res

def is_prime(x):
    if x < 2:
        return False
    limit = int(x ** 0.5)
    for i in range(2, limit + 1):
        if x % i == 0:
            return False
    return True

def solution(n, k):
    answer = 0
    
    base_k = to_base(n, k)
    parts = base_k.split('0')
    for p in parts:
        if not p:
            continue
        num = int(p)
        if is_prime(num):
            answer+=1
                           
    return answer