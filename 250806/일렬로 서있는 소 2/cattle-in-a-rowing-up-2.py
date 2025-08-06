n = int(input())
arr = list(map(int, input().split()))

# Please write your code here.

count = 0
for i in range(n):
    for j in range(i+1, n):
        for k in range(j+1, n):
            if arr[i] <= arr[j] and arr[j] <= arr[n]:
                count += 1

print(count)