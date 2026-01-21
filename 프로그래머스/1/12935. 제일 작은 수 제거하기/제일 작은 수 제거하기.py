def solution(arr):
    min_num = min(arr)
    index = arr.index(min_num)
    arr.pop(index)
    
    if not arr:
        arr.append(-1)
    return arr