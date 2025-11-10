def solution(numbers, target):
    answer = 0
    n = len(numbers)
    def dfs(idx, current):
        nonlocal answer
        
        if idx == n:
            if current == target:
                answer += 1
            return
        dfs(idx + 1, current + numbers[idx])
        dfs(idx + 1, current - numbers[idx])
    
    dfs(0, 0)
    
    return answer