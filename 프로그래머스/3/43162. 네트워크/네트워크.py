# from collections import deque
from collections import deque
def solution(n, computers):
    cnt = 0
    visited = [False] * n
    def dfs(node):
        visited[node] = True
        for nxt in range(n):
            if computers[node][nxt] == 1 and not visited[nxt]:
                dfs(nxt)
    for i in range(n):
        if not visited[i]:
            dfs(i)
            cnt += 1
    return cnt