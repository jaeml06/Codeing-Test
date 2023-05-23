import sys

input = sys.stdin.readline

N = int(input())

cost = [list(map(int, input().split())) for _ in range(N)]


for i in range(1, N):
    cost[i][0] = min(cost[i - 1][1], cost[i - 1][2]) + cost[i][0]  # i번쨰 빨간색
    cost[i][1] = min(cost[i - 1][0], cost[i - 1][2]) + cost[i][1]  # i번쨰 초록색
    cost[i][2] = min(cost[i - 1][0], cost[i - 1][1]) + cost[i][2]  # i번쨰 파란색

print(min(cost[N - 1]))
