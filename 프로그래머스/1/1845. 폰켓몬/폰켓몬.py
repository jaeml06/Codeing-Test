def solution(nums):
    answer = 0
    n = len(set(nums))
    selected_n = len(nums) / 2
    if n > selected_n:
        answer = selected_n
    else:
        answer = n
    return answer