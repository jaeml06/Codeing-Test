def solution(s, skip, index):
    answer = ''
    set1 = set(skip)
    res = []
    
    for ch in s:
        cur = ord(ch)
        cnt = 0
        
        while cnt < index:
            cur += 1
            if cur > ord('z'):
                cur = ord('a')
            if chr(cur) in set1:
                continue
            cnt += 1
        res.append(chr(cur))
    return ''.join(res)