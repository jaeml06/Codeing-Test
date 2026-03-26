import sys
input = sys.stdin.readline

s = input().strip()
q = int(input())

n = len(s)

prefix = [[0] * (n + 1) for _ in range(26)]

for i in range(n):
    for j in range(26):
        prefix[j][i + 1] = prefix[j][i]
    prefix[ord(s[i]) - ord('a')][i + 1] += 1

for _ in range(q):
    a, l, r = input().split()
    l = int(l)
    r = int(r)
    idx = ord(a) - ord('a')
    print(prefix[idx][r + 1] - prefix[idx][l])