n = int(input())

fact = 1
for i in range(1, n + 1):
    fact *= i

cnt = 0
while fact % 10 == 0:
    cnt += 1
    fact //= 10
print(cnt)