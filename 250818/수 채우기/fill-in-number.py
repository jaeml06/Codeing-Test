n = int(input())

# Please write your code here.
coins = [5, 2]
count = 0
for coin in coins:
    if n >= coin:
        count =count + (n // coin)
        n %= coin
print(count)
