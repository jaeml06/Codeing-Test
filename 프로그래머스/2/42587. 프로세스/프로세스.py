from collections import deque
def solution(priorities, location):
    q = deque([])
    for i, p in enumerate(priorities):
        q.append((p, i))
    priorities_sorted = sorted(priorities, reverse=True)
    
    process = 0
    while q:
        p, i = q.popleft()
        
        if p == priorities_sorted[process]:
            process += 1
            if i == location:
                return process
        else:
            q.append((p, i))
    return 0
