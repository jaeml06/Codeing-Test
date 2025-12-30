def solution(routes):
    routes.sort(key=lambda x: x[1])
    pos = -30_000
    cnt = 0
    
    for s, e in routes:
        if pos < s:
            pos = e
            cnt += 1
    
    return cnt