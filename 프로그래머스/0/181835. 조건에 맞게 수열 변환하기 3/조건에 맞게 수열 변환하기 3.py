def solution(arr, k):
    answer = []
    answer = map(lambda x: x + k if k % 2 == 0 else x * k, arr)
    return list(answer)