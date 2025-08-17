import sys
n = int(input())
meetings = [tuple(map(int, input().split())) for _ in range(n)]

# Please write your code here.
meetings.sort(key=lambda x: x[1])
cnt, last_end = 0, -sys.maxsize
for s, e in meetings:
    if s >= last_end:
        cnt += 1
        last_end = e
print(cnt)