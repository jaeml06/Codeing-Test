def solution(arr):
    min_num = min(arr)
    index = arr.index(min_num)
    
    answer = arr[:index] + arr[index + 1:]
    if not answer:
        answer.append(-1)
    return answer