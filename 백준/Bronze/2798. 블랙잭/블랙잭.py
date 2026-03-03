from itertools import combinations
N, M = map(int, input().split())
cards = list(map(int, input().split()))

max_sum = 0

for card in combinations(cards, 3):
    temp = sum(card)
    if temp <= M:
        max_sum = max(max_sum, temp)
        if max_sum == M:
            break
print(max_sum)