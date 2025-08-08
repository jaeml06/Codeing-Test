n = int(input())
people = [tuple(input().split()) for _ in range(n)]
pos = [int(p[0]) for p in people]
alpha = [p[1] for p in people]
arr = ['T'] * 101

for i in range(n):
    if(alpha[i] == 'G'):
        arr[pos[i]] = 'G'
    elif(alpha[i] == 'H'):
        arr[pos[i]] = 'H'

max_len = 0
for i in range(101):
    for j in range(i+1, 101):
        if arr[i] == 'T' or arr[j] == 'T':
            continue
        
        cnt_g = 0
        cnt_h = 0

        for k in range(i, j + 1):
            if arr[k] == 'G':
                cnt_g+=1
            if arr[k] == 'H':
                cnt_h +=1
        if cnt_g == cnt_h:
            max_len = max(max_len, j-i)
print(max_len)
