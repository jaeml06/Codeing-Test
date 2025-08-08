import sys
N, H, T = map(int, input().split())
arr = list(map(int, input().split()))

# Please write your code here.
max_cnt = sys.maxsize
for i in range(N-T+1):
    cnt = 0
    for j in range(i, i+T):
        cnt += abs(H - arr[j])
    max_cnt = min(max_cnt, cnt)
    
print(max_cnt)