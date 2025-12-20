from collections import deque
def solution(begin, target, words):
    if target not in words:
        return 0
    v = set()
    q = deque([(begin, 0)])
    v.add(begin)
    
    def can_go(w, word):
        temp = 0
        for x1, x2 in zip(w, word):
            if x1 != x2:
                temp += 1
        return temp == 1
    
    while q:
        w, cnt = q.popleft()
        if w == target:
            return cnt
        for word in words:
            if word not in v and can_go(w, word):
                v.add(word)
                q.append((word, cnt+1))
            
    
    return 0