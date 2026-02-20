def solution(n):
    cur = 0
    cnt = 0
    
    while cnt < n:
        cur += 1
        if cur % 3 == 0 or '3' in str(cur):
            continue
        cnt += 1
    return cur