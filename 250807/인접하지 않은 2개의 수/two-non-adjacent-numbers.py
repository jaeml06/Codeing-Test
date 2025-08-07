n = int(input())
numbers = list(map(int, input().split()))

# Please write your code here.
max1 = 0
for i in range(n-1):
    for j in range(i+2, n):
        max1 = max(max1, numbers[i] + numbers[j])

print(max1)