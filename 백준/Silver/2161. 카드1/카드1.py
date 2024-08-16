import sys
read = sys.stdin.readline

N = int(input())

card = [i for i in range(1, N + 1)]
temp = []
while True:
  temp.append(card.pop(0))
  if len(card) == 0:
    break;
  card.append(card.pop(0))

print(*temp)