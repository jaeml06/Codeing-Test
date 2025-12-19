def solution(msg):
    d = {chr(i + 64): i for i in range(1, 27)}
    idx = 27
    answer = []
    i = 0
    n = len(msg)
    
    while i < n:
        w = msg[i]
        j = i + 1
        while j <= n and msg[i:j] in d:
            w = msg[i:j]
            j+=1
        answer.append(d[w])
        
        if j <= n:
            d[msg[i:j]] = idx
            idx += 1
        i += len(w)
            
    return answer