N = int(input())
pigeon = []
position = []
for _ in range(N):
    p, pos = map(int, input().split())
    pigeon.append(p)
    position.append(pos)

pos = [-1] * (11)

move_cnt = 0

for p, d in zip(pigeon, position):
    if pos[p] == -1:
        pos[p] = d
    elif pos[p] != d:
        pos[p] = d
        move_cnt += 1

print(move_cnt)