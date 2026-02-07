def solution(array):
    freq = {}

    for x in array:
        freq[x] = freq.get(x, 0) + 1
        
    max_f = max(freq.values())
    mode = -1
    count_max = 0
    for k, v in freq.items():
        if v == max_f:
            mode = k
            count_max += 1
            if count_max > 1:
                return -1
    return mode