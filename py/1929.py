import sys


"""
import sys
input = sys.stdin.readline

M, N = map(int, input().split())
data = []
for i in range(M, N + 1):
    data.append(i)

for i in range(1, data[len(data) - 1] + 1):
    for j in range(0, len(data)):
        if i == 1:
            break
        elif data[j] == 1:
            data[j] = 0
        elif data[j] % i == 0 and data[j] != i:
            data[j] = 0
for i in data:
    if i != 0:
        print(i)
"""

import sys

input = sys.stdin.readline

M, N = map(int, input().split())
data = []
for i in range(M, N + 1):
    data.append(i)

for i in range(len(data)):
    if data[i] == 1:
        data[i] = 0
        continue
    for j in range(2, (int(data[i] ** 0.5) + 1)):
        if data[i] % j == 0:
            data[i] = 0
            break

for i in data:
    if i != 0:
        print(i)
