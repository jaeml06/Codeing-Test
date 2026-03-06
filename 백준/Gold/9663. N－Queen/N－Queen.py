import sys
input = sys.stdin.readline

n = int(input().strip())

# col_used[c]  : c열에 이미 퀸이 있으면 True
# diag1_used[i]: / 대각선 (row + col) 이 i인 줄에 퀸이 있으면 True
# diag2_used[i]: \ 대각선 (row - col + (n-1)) 이 i인 줄에 퀸이 있으면 True
col_used = [False] * n
diag1_used = [False] * (2 * n - 1)
diag2_used = [False] * (2 * n - 1)

ans = 0

def dfs(row):
    global ans
    if row == n:  # 0~n-1행까지 퀸을 다 놓았으면 1가지 방법 완성
        ans += 1
        return

    for col in range(n):
        d1 = row + col              # / 대각선 인덱스
        d2 = row - col + (n - 1)    # \ 대각선 인덱스 (음수 방지)

        if col_used[col] or diag1_used[d1] or diag2_used[d2]:
            continue

        col_used[col] = True
        diag1_used[d1] = True
        diag2_used[d2] = True

        dfs(row + 1)

        col_used[col] = False
        diag1_used[d1] = False
        diag2_used[d2] = False

dfs(0)
print(ans)