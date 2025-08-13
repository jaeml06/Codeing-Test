import sys
n = int(input())
a = list(map(int, input().split()))

# Please write your code here.
max_sum = -sys.maxsize
for i in range(n):
    for j in range(i, n):
        max_sum = max(max_sum, sum(a[i:j + 1]))
print(max_sum)