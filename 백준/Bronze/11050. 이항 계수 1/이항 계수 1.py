n, k = map(int, input().split())

temp1 = 1
temp2 = 1
for i in range(n, n-k,-1):
    temp1 *= i
for i in range(1, k + 1):
    temp2 *= i
print(temp1 // temp2)
    