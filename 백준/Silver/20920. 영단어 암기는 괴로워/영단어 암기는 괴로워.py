n, m = map(int, input().split())

freq = {}

for _ in range(n):
    temp = input()
    if len(temp) >= m:
        freq[temp] = freq.get(temp, 0) + 1
words = sorted(freq.keys(), key=lambda x: (-freq[x], -len(x), x))

print('\n'.join(words))