n = int(input())
dance = {"ChongChong"}

for _ in range(n):
    a, b = input().split()
    if a in dance or b in dance:
        dance.add(a)
        dance.add(b)

print(len(dance))