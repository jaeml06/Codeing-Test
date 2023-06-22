def solution(nums):
    answer = 0
    dataSize = len(set(nums))
    k = len(nums)/2
    if dataSize>k:
        answer = k
    else:
        answer = dataSize
    
    return answer