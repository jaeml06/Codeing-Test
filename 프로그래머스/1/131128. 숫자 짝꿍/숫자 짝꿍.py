def solution(X, Y):
    cntX = [0] * 10
    cntY = [0] * 10
    
    for ch in X:
        cntX[int(ch)] += 1
    for ch in Y:
        cntY[int(ch)] += 1
        
    result = []
    for i in range(9, -1, -1):
        common = min(cntX[i], cntY[i])
        if common > 0:
            result.append(str(i) * common)
    answer = ''.join(result)
    
    if not answer:
        return '-1'
    if answer[0] == '0':
        return '0'
    return answer