import sys
n, k = map(int, input().split())

arr = [0] + list(map(int, input().split()))

temp = [0] * (n + 1)
temp[1] = arr[1]
for i in range(1, n+1):
    temp[i] = arr[i] + temp[i-1]

max_answer = -sys.maxsize

for i in range(k, n + 1):
    max_answer = max(max_answer, temp[i] - temp[i - k])

print(max_answer)