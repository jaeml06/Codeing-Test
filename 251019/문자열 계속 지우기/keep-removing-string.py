A = input()
B = input()

stack = []

for ch in A:
    stack.append(ch)
    if ''.join(stack[-len(B):]) == B:
        for _ in range(len(B)):
            stack.pop()

print(''.join(stack))