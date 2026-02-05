def solution(topping):
    answer = 0
    n = len(topping)
    left = [0] * len(topping)
    right = [0] * len(topping)
    left_set = set()
    right_set = set()
    
    for i in range(n):
        left_set.add(topping[i])
        left[i] = len(left_set)
    for i in range(n-1, -1, -1):
        right_set.add(topping[i])
        right[i] = len(right_set)
    
        
    for i in range(0, n-1):
        if left[i] == right[i+1]:
            answer+=1
    return answer