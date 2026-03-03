N = int(input())
temp = list(set([input() for _ in range(N)]))

temp.sort(key=lambda x: (len(x), x))

for t in temp:
    print(t)