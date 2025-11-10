from collections import deque
def solution(n, computers):
    answer = 0
    visited = [False] * n
    def bfs(start):
        q = deque([start])
        visited[start] = True
        
        while q:
            current = q.popleft()
            for i in range(n):
                if computers[current][i] == 1 and not visited[i]:
                    visited[current] = True
                    q.append(i)
    for i in range(n):
        if not visited[i]:
            bfs(i)
            answer+=1
        
    return answer