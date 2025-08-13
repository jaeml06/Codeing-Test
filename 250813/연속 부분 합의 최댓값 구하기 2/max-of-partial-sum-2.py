import sys
n = int(input())
a = list(map(int, input().split()))

# Please write your code here.
answer = -sys.maxsize
max_sum = 0
for i in range(n):
    if max_sum >= 0:
        max_sum += a[i]   
    else: 
        max_sum = a[i]
    answer = max(max_sum, answer)
    
print(answer)