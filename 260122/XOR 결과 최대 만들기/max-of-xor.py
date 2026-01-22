n, m = map(int, input().split())
A = list(map(int, input().split()))
visited = [False for _ in range(n)]

max_ans = 0

def dfs(start, cnt):
    global max_ans

    if cnt == m:
        temp = 0
        for i in range(n):
            if visited[i]:
                temp ^= A[i]

        max_ans = max(max_ans, temp)
        return
    if start == n:
        return

    dfs(start + 1, cnt)

    visited[start] = True
    dfs(start + 1, cnt + 1)
    visited[start] = False


dfs(0, 0)

print(max_ans)

