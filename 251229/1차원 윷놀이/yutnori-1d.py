import sys
sys.setrecursionlimit(1000000)
n, m, k = map(int, input().split())
nums = list(map(int, input().split()))

positions = [1] * k
answer = 0

def dfs(turn, score):
    global answer
    if turn == n:
        answer = max(answer, score)
        return

    for i in range(k):
        if positions[i] >= m:
            dfs(turn + 1, score)
            continue
        prev = positions[i]
        positions[i] += nums[turn]

        g = 0
        if positions[i] >= m:
            g = 1
        dfs(turn + 1, score + g)
    
        positions[i] = prev
dfs(0, 0)
print(answer)