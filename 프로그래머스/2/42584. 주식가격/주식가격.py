def solution(prices):
    n = len(prices)
    answer = [0] * n
    s = []
    
    for i in range(n):
        while s and prices[i] < prices[s[-1]]:
            temp = s.pop()
            answer[temp] = i - temp
        s.append(i)
    
    while s:
        temp = s.pop()
        answer[temp] = n - 1- temp
    return answer