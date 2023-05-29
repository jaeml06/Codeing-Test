import sys

input = sys.stdin.readline

n = int(input())
data = []

for i in range(n):
    data.append(list(map(int, input().split())))
num = 2
for i in range(1, n):
    for j in range(num):
        if j == 0:
            data[i][j] = data[i][j] + data[i - 1][j]
        elif i == j:
            data[i][j] = data[i][j] + data[i - 1][j - 1]
        else:
            data[i][j] = data[i][j] + max(data[i - 1][j], data[i - 1][j - 1])

    num += 1
print(max(data[n - 1]))
