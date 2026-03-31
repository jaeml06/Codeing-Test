n = int(input())
cnt = 0
for _ in range(n):
    s = input()
    set1 = set()
    prev = ''
    
    flag = True
    
    for ch in s:
        if ch != prev:
            if ch in set1:
                flag = False
                break
            set1.add(ch)
        prev = ch
    if flag:
        cnt += 1
print(cnt)