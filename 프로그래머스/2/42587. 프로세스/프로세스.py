from collections import deque
def solution(priorities, location):
    answer = 0
    temp = []
    for idx, p in enumerate(priorities):
        temp.append((p, idx))
    q = deque(temp)
    priorities_sorted = sorted(priorities, reverse=True)
    
    process = 0
    while q:
        p, idx = q.popleft()
        
        if p == priorities_sorted[process]:
            process += 1
            if idx == location:
                return process
        
        else:
            q.append((p, idx))
    return answer