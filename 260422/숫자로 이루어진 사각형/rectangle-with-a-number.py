n = int(input())

for i in range(n):
    for j in range(i * n, i * n + n):
        print((j % 9) + 1, end=' ')
    print()