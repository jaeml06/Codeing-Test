def solution(numbers):
    n = len(numbers)
    answer = [-1] * n
    stack = []
    
    for i in range(n-1, -1, -1):
        num = numbers[i]
        
        while stack and stack[-1] <= num:
            stack.pop()
            
        if stack:
            answer[i] = stack[-1]
        stack.append(num)
    return answer