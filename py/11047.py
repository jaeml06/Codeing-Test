N, K = map(int, input().split())

data = []
for _ in range(N):
    data.append(int(input()))
count = 0
for _ in range(N):
    money = data.pop()
    count += K//money
    K %= money
print(count)
