n = int(input())
arr = list(map(int, [input() for _ in range(n)]))
s = str(sum(arr))

print(s[1:] + s[0])
