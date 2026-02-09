def solution(numbers, target):
    answer = 0
    n = len(numbers)
    def dfs(idx, cur):
        nonlocal answer
        
        if idx == n:
            if target == cur:
                answer +=1
            return
        
        dfs(idx + 1, cur + numbers[idx])
        dfs(idx + 1, cur - numbers[idx])
    dfs(0,0)
    return answer
