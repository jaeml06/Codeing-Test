n = int(input())

meetings = []

for _ in range(n):
    s, e = map(int, input().split())
    meetings.append((s, e))
meetings.sort(key=lambda x: (x[1], x[0]))

cnt = 0
e_t = 0
for s, e in meetings:
    if s >= e_t:
        cnt += 1
        e_t = e
print(cnt)