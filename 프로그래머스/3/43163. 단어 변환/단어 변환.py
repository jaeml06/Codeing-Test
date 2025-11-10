from collections import deque
def solution(begin, target, words):
    if target not in words:
        return 0
    
    def can_change(a, b):
        diff = 0
        for x, y in zip(a, b):
            if x != y:
                diff += 1
                if diff > 1:
                    return False
        return diff == 1

    
    visited = set()
    q = deque([(begin, 0)])
    
    while q:
        word, cnt = q.popleft()
        if word == target:
            return cnt
        for w in words:
            if w not in visited and can_change(word, w):
                visited.add(w)
                q.append((w, cnt + 1))
                
    return 0
    
    return answer