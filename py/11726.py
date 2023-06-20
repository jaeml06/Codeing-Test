import sys

input = sys.stdin.readline

n = int(input())

data = [0] * 1001
data[1] = 1
data[2] = 2


for i in range(3, n + 1):
    data[i] = data[i - 1] % 10007 + data[i - 2] % 10007
print(data[n] % 10007)
