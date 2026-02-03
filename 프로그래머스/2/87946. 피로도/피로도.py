def solution(k, dungeons):
    n = len(dungeons)
    visited = [False] * n
    ans = 0
    
    def dfs(cur, cnt):
        nonlocal ans
        ans = max(ans, cnt)
        
        for i in range(n):
            if visited[i]:
                continue
            need_s, consumed_s = dungeons[i]
            if cur >= need_s:
                visited[i] = True
                dfs(cur - consumed_s, cnt + 1)
                visited[i] = False
    
    dfs(k, 0)
    return ans