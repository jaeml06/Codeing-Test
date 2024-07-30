import sys
read = sys.stdin.readline

N = int(read())

answer = ''
answer += '@' * (N +2) + '\n'
for _ in range(N):
  answer+= '@' + ' ' * N + '@' + '\n'
answer += '@' * (N +2) + '\n'

print(answer)