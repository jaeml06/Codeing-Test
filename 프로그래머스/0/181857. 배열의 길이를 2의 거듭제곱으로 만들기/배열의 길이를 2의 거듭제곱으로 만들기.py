def solution(arr):
    answer = []
    temp = 1
    while True:
        
        if len(arr) <= temp:
            break
        temp *= 2
    answer = arr + ([0] * (temp - len(arr)))
    return answer