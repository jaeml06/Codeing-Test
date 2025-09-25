import heapq
N = int(input())
commands = []
temp = []

for _ in range(N):
    line = input().split()
    if line[0] == "push":
        commands.append((line[0], int(line[1])))
    else:
        commands.append((line[0],))

# Please write your code here.
for command in commands:
    if command[0] == 'push':
        _, val = command
        heapq.heappush(temp, -val)
    if command[0] =='size':
        print(len(temp))
    if command[0] == 'pop':
        if not temp:
            continue
        print(-heapq.heappop(temp))
    if command[0] == 'empty':
        if not temp:
            print(1)
        else: 
            print(0)
    if command[0] == 'top':
        if not temp:
            continue
        print(-temp[0])


        

