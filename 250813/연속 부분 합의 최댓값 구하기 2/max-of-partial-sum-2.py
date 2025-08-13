import sys
n = int(input())
a = list(map(int, input().split()))

# Please write your code here.
max_sum = 0
for i in range(n):
    if max_sum >= 0:
        max_sum += a[i]
    else: max_sum = a[i]
    
    
print(max_sum)