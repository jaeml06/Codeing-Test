from collections import deque
n = int(input())
arr = list(map(int, input().split()))

arr.sort()
dq = deque(arr)
cnt = 0
while len(dq) != 1:
    if len(dq) >= 2:
        temp1= dq.popleft()
        temp2 = dq.popleft()
        dq.append(temp1 + temp2)
        cnt += temp1 + temp2

print(cnt)