n = int(input())
segments = [tuple(map(int, input().split())) for _ in range(n)]
x1, x2 = zip(*segments)
x1, x2 = list(x1), list(x2)

flag = True

for i in range(1, n):
    a1, b1 = segments[i - 1]
    a2, b2 = segments[i]

    if b1 < a2 or b2 < a1:
        flag = False

if flag:
    print('Yes')
else:
    print('No')
