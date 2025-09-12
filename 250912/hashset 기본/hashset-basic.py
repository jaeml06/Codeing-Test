n = int(input())
commands = []
x = []

s = set()
for _ in range(n):
    cmd, val = input().split()
    commands.append(cmd)
    x.append(int(val))

# Please write your code here.
for cmd, val in zip(commands, x):
    if cmd == 'add':
        s.add(val)
    elif cmd == 'remove':
        s.remove(val)
    else:
        if val in s:
            print('true')
        else:
            print('false')