N = int(input())

temp = list(map(int, [input() for _ in range(N)]))
temp.sort()
for t in temp:
    print(t)