from itertools import combinations
def is_prime(n):
    if n < 2:
        return False
    limit = int(n ** 0.5)
    for i in range(2, limit + 1):
        if n % i == 0:
            return False
    return True
        
def solution(nums):
    answer = 0
    for val in combinations(nums, 3):
        s = sum(val)
        if is_prime(s):
            answer += 1
        
    return answer