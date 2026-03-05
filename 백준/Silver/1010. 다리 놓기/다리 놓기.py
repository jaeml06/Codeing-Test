t = int(input())

for _ in range(t):
    n, m = map(int, input().split())

    num = 1
    den = 1
    for i in range(m, m - n, -1):
        num *= i
    for i in range(1, n + 1):
        den *= i

    print(num // den)