import sys

input = sys.stdin.readline

n = int(input())

data = [int(input()) for _ in range(n)]

sum = [0] * n
sum[0] = data[0]
if n > 1:
    sum[1] = data[0] + data[1]
if n > 2:
    sum[2] = max(data[0] + data[2], data[1] + data[2])


for i in range(3, n):
    sum[i] = max(data[i] + sum[i - 2], data[i] + data[i - 1] + sum[i - 3])

print(sum[n - 1])
