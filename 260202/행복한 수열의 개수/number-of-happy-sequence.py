n, m = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(n)]

def is_happy(arr):
    if m == 1:
        return True

    cnt = 1
    for i in range(1, len(arr)):
        if arr[i] == arr[i - 1]:
            cnt += 1
            if cnt >= m:
                return True
        else:
            cnt = 1
    return False

answer = 0

for i in range(n):
    if is_happy(grid[i]):
        answer += 1

for j in range(n):
    col = [grid[i][j] for i in range(n)]
    if is_happy(col):
        answer += 1

print(answer)