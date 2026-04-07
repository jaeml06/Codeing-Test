import sys
input = sys.stdin.readline

n = int(input())
stack = []
result = []
cur = 1

for _ in range(n):
    x = int(input())
    
    while cur <= x:
        stack.append(cur)
        result.append('+')
        cur += 1
    if stack and stack[-1] == x:
        stack.pop()
        result.append('-')
    else:
        print('NO')
        break
else:
    print('\n'.join(result))