def solution(order):
    answer = 0
    stack = []
    n = len(order)
    cur = 1
    
    for target in order:
        while cur <= n and cur < target:
            stack.append(cur)
            cur += 1
            
        if cur <= n and cur == target:
            answer += 1
            cur += 1
            continue
            
        if stack and stack[-1] == target:
            stack.pop()
            answer += 1
        else:
            break
            
    return answer