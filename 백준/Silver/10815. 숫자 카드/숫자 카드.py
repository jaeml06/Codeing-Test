import sys
read = sys.stdin.readline

N = int(read())
card1 = list(map(int, read().split()))
M = int(read())
card2 = list(map(int, read().split()))

dic = {}

for o in card2:
    dic[o] = 0

for c in card1:
    if c in dic:
        dic[c] = 1

print(' '.join(map(str, [dic[o] for o in card2])))