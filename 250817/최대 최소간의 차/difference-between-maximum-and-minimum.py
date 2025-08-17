import sys
n, k = map(int, input().split())
arr = list(map(int, input().split()))

# Please write your code here.
ans = sys.maxsize
for L in range(0, 9984):
    R = L + k
    cost = 0
    for num in arr:
        if num < L:
            d = L - num
            cost += abs(d)
        elif num > R:
            d = num - R
            cost += abs(d)
    ans = min(ans, cost)
print(ans)
