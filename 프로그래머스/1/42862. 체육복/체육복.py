def solution(n, lost, reserve):
    lost = set(lost)
    reserve = set(reserve)
    common = lost & reserve
    
    lost -= common
    reserve -= common
    
    for s in sorted(lost):
        if s - 1 in reserve:
            reserve.remove(s - 1)
            lost.remove(s)
        elif s + 1 in reserve:
            reserve.remove(s + 1)
            lost.remove(s)
    return n - len(lost)