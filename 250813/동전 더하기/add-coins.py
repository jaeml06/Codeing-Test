n, k = map(int, input().split())
coins = [int(input()) for _ in range(n)]

# Please write your code here.
coins.sort(reverse=True)
count = 0
for coin in coins:
    if k >= coin:
        count += k // coin  # 해당 동전 최대 개수
        k %= coin

print(count)