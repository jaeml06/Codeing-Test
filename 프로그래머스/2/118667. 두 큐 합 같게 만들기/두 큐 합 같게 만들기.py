from collections import deque
def solution(queue1, queue2):
    q1 = deque(queue1)
    q2 = deque(queue2)
    s1 = sum(q1)
    s2 = sum(q2)
    total = s1 + s2
    target = total // 2
    if total % 2 == 1:
        return -1
    cnt = 0
    limit = len(q1) * 3
    while cnt <= limit:
        if s1 == target:
            return cnt
        
        if s1 > target:
            temp = q1.popleft()
            s1 -= temp
            s2 += temp
            q2.append(temp)
        else:
            temp = q2.popleft()
            s2 -= temp
            s1 += temp
            q1.append(temp)
        cnt += 1
    return -1