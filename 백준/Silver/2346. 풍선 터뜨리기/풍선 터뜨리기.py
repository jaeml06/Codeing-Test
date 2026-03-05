from collections import deque

n = int(input())
moves = list(map(int, input().split()))

q = deque((i + 1, moves[i]) for i in range(n))
ans = []

while q:
    idx, v = q.popleft()
    ans.append(idx)
    
    if not q:
        break
    if v > 0:
        for _ in range(v - 1):
            q.append(q.popleft())
    else:
        for _ in range(-v):
            q.appendleft(q.pop())  
        
print(*ans)