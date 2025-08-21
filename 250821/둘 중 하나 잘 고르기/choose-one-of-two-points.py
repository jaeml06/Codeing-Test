import sys
input = sys.stdin.readline

N = int(input().strip())

diffs = []
sumB = 0

for _ in range(2 * N):
    r, b = map(int, input().split())
    sumB += b
    diffs.append(r - b)

diffs.sort(reverse=True)
answer = sumB + sum(diffs[:N])

print(answer)