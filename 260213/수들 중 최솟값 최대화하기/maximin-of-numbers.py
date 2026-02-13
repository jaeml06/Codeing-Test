n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]

# Please write your code here.
ans = 0
visited = [False] * n
selected = []

def max_min(cnt):
    global ans
    if cnt == n:
        ans = max(ans, min(selected))
        return 
    
    for a in range(n):
        if not visited[a]:
            visited[a] = True
            selected.append(grid[cnt][a])

            max_min(cnt+1)
            selected.pop()
            visited[a] = False
max_min(0)
print(ans)
