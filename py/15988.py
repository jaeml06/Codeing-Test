import sys

input = sys.stdin.readline


T = int(input())
data = [0] * 1000001
data[1] = 1
data[2] = 2
data[3] = 4
for i in range(4, 1000001):
    data[i] = (
        data[i - 1] % 1000000009 + data[i - 2] % 1000000009 + data[i - 3] % 1000000009
    )
for _ in range(T):
    n = int(input())
    print(data[n] % 1000000009)
