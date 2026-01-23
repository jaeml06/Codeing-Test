n = int(input())
visited = [False] * (n + 1)
picked = []

def dfs(cnt):
    if cnt == n:
        for v in picked:
            print(v, end=' ')
        print()
        return
    
    for i in range(n, 0, -1):
        if visited[i]:
            continue

        visited[i] = True
        picked.append(i)

        dfs(cnt + 1)

        visited[i] = False
        picked.pop()
dfs(0)