from collections import deque
def solution(n, computers):
    answer = 0
    visited = [False] * n
    def dfs(node):
        visited[node] = True
        
        for nxt in range(n):
            if computers[node][nxt] == 1 and not visited[nxt]:
                dfs(nxt)
    for i in range(n):
        if not visited[i]:
            dfs(i)
            answer+=1
    return answer