def is_prime(n):
    if n < 2:
        return False
    end = int(n ** 0.5)
    for i in range(2, end + 1):
        if n % i == 0:
            return False
    return True

def combination(arr, cnt):
    result = []
    path = []
    def dfs(start):
        if len(path) == cnt:
            result.append(path[:])
            return
        for i in range(start, len(arr)):
            path.append(arr[i])
            dfs(i + 1)
            path.pop()
    dfs(0)
    return result
        
        
def solution(nums):
    answer = 0
    for val in combination(nums, 3):
        s = sum(val)
        if is_prime(s):
            answer += 1
        
    return answer