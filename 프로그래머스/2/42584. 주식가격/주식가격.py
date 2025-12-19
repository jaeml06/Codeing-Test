def solution(prices):
    n = len(prices)
    answer = [0] * n
    stack = []
    for i in range(n):
        while stack and prices[i] < prices[stack[-1]]:
            j = stack.pop()
            answer[j] = i - j
        stack.append(i)
        
    while stack:
        j = stack.pop()
        answer[j] = n - 1 - j
    return answer