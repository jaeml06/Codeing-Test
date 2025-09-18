import sys
n = int(input())
price = list(map(int, input().split()))

min_price = price[0]
ans = 0
for i in range(n):
    if i == 0:
       ans = max(ans, price[i] - min_price)
    else:
        min_price = min(min_price, price[i-1])
        ans = max(ans, price[i] - min_price) 
print(ans)
