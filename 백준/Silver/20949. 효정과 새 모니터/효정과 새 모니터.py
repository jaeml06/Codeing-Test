import sys
read = sys.stdin.readline

N = int(read().strip())
answer = []
for i in range(1, N+1):
  W, H = map(int, read().split(' '))
  PPI = ((W**2 + H**2)**0.5) / 24
  answer.append((i, PPI))

answer.sort(key=lambda x: x[1], reverse=True)
print('\n'.join([f"{i}" for i, PPI in answer]))