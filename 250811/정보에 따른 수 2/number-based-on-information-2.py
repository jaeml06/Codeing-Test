import sys
T, a, b = map(int, input().split())
c = []
x = []
ans = 0
for _ in range(T):
    char, pos = input().split()
    c.append(char)
    x.append(int(pos))

# Please write your code here.
for k in range(a, b+1):
    nearS = sys.maxsize
    nearN = sys.maxsize
    for i in range(T):
        if c[i] == 'S':
            nearS = min(nearS, abs(k - x[i]))
        else:
            nearN = min(nearN, abs(k - x[i]))
    if nearS <= nearN:
        ans += 1

print(ans)
