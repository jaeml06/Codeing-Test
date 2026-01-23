def solution(n):
    cnt = 0
    i = 1
    j = 1
    cur = 1

    while i <= n:
        if cur == n:
            cnt += 1
            j += 1
            cur += j
        elif cur < n:
            j += 1
            cur += j
        else:
            cur -= i
            i += 1

    return cnt