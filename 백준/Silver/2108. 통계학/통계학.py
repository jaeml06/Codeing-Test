import sys
from collections import Counter

input = sys.stdin.readline

n = int(input())
arr = [int(input()) for _ in range(n)]
arr.sort()

# 1. 산술평균
mean = round(sum(arr) / n)

# 2. 중앙값
median = arr[n // 2]

# 3. 최빈값
counter = Counter(arr)
max_freq = max(counter.values())
modes = []

for num, freq in counter.items():
    if freq == max_freq:
        modes.append(num)

modes.sort()

if len(modes) == 1:
    mode = modes[0]
else:
    mode = modes[1]

# 4. 범위
range_value = arr[-1] - arr[0]

print(mean)
print(median)
print(mode)
print(range_value)