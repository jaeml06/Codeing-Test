import sys
input = sys.stdin.readline

N = int(input().strip())
cards = [tuple(map(int, input().split())) for _ in range(2 * N)]

d_min = -sys.maxsize
# dp[i][j]: 앞에서 i줄까지 보고(0..i-1), 빨강 j개를 골랐을 때 최대 합
dp = [[d_min] * (N + 1) for _ in range(2 * N + 1)]
dp[0][0] = 0

for i in range(2 * N):
    r, b = cards[i]
    for j in range(N + 1):
        if dp[i][j] == d_min:
            continue
        # 파랑 선택 (빨강 개수 유지)
        dp[i + 1][j] = max(dp[i + 1][j], dp[i][j] + b)
        # 빨강 선택 (빨강 개수 +1)
        if j + 1 <= N:
            dp[i + 1][j + 1] = max(dp[i + 1][j + 1], dp[i][j] + r)


print(dp[2 * N][N])