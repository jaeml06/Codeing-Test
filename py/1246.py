import sys

N, M = map(int, sys.stdin.readline().split())
P = [int(sys.stdin.readline()) for i in range(M)]

maxPrice = 0
maxTotalPrice = 0
P.sort(reverse=True)
for i in P:
    count = 0
    price = i
    for j in P:
        if price <= j:
            count += 1
            if count == N:
                break

    if maxTotalPrice <= price*count:
        maxPrice = price
        maxTotalPrice = price*count

print(maxPrice, maxTotalPrice)
