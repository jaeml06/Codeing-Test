n = int(input())

arr = list(map(int, input().split()))

stack = []
need = 1

for x in arr:
    while stack and stack[-1] == need:
        stack.pop()
        need+=1
    if x == need:
        need+=1
    else:
        stack.append(x)
while stack and stack[-1] == need:
    stack.pop()
    need += 1

print('Nice' if need == n +1 else 'Sad')