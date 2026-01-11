def solution(arr, n):
    is_even = True if len(arr) % 2 == 0 else False
    for i in range(len(arr)):
        if is_even:
            if i % 2 == 1:
                arr[i] += n
        else:
            if i % 2 == 0:
                arr[i] += n
    
    return arr