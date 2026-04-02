from collections import deque
t = int(input())

for _ in range(t):
    n, m = map(int, input().split())
    priorities = list(map(int, input().split()))
    q = deque()
    for i in range(n):
        q.append((i, priorities[i]))
    cnt = 0
    while q:
        idx, priority = q.popleft()
        
        if any(priority < x[1] for x in q):
            q.append((idx, priority))
        else:
            cnt += 1
            if idx == m:
                print(cnt)
                break
