n, k = map(int, input().split())
arr = list(map(int, input().split()))

# Please write your code here.

temp = {}
ans = 0
for elem in arr:
    diff = k - elem
    if diff in temp:
        ans += temp[diff]

    if elem in temp:
        temp[elem] += 1
    else:
        temp[elem] = 1

print(ans)

