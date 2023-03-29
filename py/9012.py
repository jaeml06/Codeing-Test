T = int(input())
for i in range(T):
    stack = []
    bracket = input()
    for j in bracket:
        if j == '(':
            stack.append(j)
        elif j == ')':
            if stack:
                stack.pop()
            else:
                print("NO")
                break
    else:
        if len(stack) == 0:
            print("YES")
        else:
            print("NO")
