import sys
sys.setrecursionlimit(10**7)

n = int(input())
count = 0

def dfs(length: int):
    global count
    if length == n:
        count += 1
        return
    if length > n:
        return

    # 블록을 붙인다: 1, 22, 333, 4444
    for k in range(1, 5):
        dfs(length + k)

dfs(0)
print(count)