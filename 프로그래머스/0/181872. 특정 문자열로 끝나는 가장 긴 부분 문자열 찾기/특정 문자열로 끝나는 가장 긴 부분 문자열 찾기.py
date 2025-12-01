def solution(myString, pat):
    last_idx = -1
    p_len = len(pat)
    
    for i in range(len(myString) - p_len + 1):
        if myString[i:i+p_len] == pat:
            last_idx = i

    return myString[:last_idx + p_len]