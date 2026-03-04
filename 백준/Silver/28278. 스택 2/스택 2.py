import sys
input = sys.stdin.readline
n = int(input())
stack = []
out = []

for _ in range(n):
    cmd = input().split()
    if cmd[0] == '1':
        stack.append(int(cmd[1]))
    elif cmd[0] == '2':
        out.append(str(stack.pop()) if stack else '-1')
    elif cmd[0] == '3':
        out.append(str(len(stack)))
    elif cmd[0] == '4':
        out.append('1' if not stack else '0')
    else:
        out.append(str(stack[-1]) if stack else '-1')
print('\n'.join(out))