def solution(array):
    max_val = max(array)
    idx = array.index(max_val)
    return [max_val, idx]