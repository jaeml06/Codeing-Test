import sys
n, s = map(int, input().split())
arr = list(map(int, input().split()))

i = 0
sum_val = 0
ans = sys.maxsize

for j in range(n):
    sum_val += arr[j]
    while sum_val >= s and i <= j:
        ans = min(ans, j - i + 1)
        sum_val -= arr[i]
        i+=1
print(ans if ans != sys.maxsize else -1)
           