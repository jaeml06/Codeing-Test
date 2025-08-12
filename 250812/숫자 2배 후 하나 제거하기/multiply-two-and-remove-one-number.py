import sys
n = int(input())
arr = list(map(int, input().split()))

# Please write your code here.
min_cnt = sys.maxsize
for i in range(n):
    temp = arr[:]
    temp[i] *= 2
    for j in range(n): 
        temp2 = [val for idx, val in enumerate(temp) if j != idx]
        cnt = 0
        for k in range(1, n-1):
            cnt += abs(temp2[k] - temp2[k-1])
        
        min_cnt = min(min_cnt, cnt)
        
print(min_cnt)