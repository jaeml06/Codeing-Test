n, k = map(int, input().split())
commands = [tuple(map(int, input().split())) for _ in range(k)]

temp = [0] * (n + 1)

for command in commands:
    a, b = command
    for i in range(a, b+1):
        temp[i] += 1

print(max(temp))

