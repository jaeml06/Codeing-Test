from collections import deque
def solution(n, results):
    win_graph = [[] for _ in range(n+1)]
    loss_graph =[[] for _ in range(n+1)]
    for a, b in results:
        win_graph[a].append(b)
        loss_graph[b].append(a)
        
    def bfs(start, graph):
        visited = [False] * (n + 1)
        q = deque([start])
        visited[start] = True
        cnt = 0
        
        while q:
            cur = q.popleft()
            for nxt in graph[cur]:
                if not visited[nxt]:
                    visited[nxt] = True
                    q.append(nxt)
                    cnt += 1
        return cnt
    answer = 0
    for i in range(1, n + 1):
        win_cnt = bfs(i, win_graph)
        loss_cnt = bfs(i, loss_graph)
        
        if win_cnt + loss_cnt == n - 1:
            answer+=1
    return answer