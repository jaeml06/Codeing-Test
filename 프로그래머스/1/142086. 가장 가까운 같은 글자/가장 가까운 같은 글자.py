def solution(s):
    last_index = {}
    answer = []
    
    for idx, ch in enumerate(s):
        if ch in last_index:
            answer.append(idx - last_index[ch])
        else:
            answer.append(-1)
        last_index[ch] = idx
    
    return answer