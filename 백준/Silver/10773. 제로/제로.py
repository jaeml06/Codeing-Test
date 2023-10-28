import sys;
input = sys.stdin.readline
K = int(input())
stack = []
for _ in range(K):
    ans = int(input())
    if ans == 0:
        stack.pop()
        continue
    stack.append(ans)
print(sum(stack))
