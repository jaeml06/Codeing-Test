import sys
n = int(input())
arr = list(map(int, input().split()))
ops = list(map(int, input().split()))

answer_max = -sys.maxsize
answer_min = sys.maxsize


def operate(cur, num, op):
    if op == 0:
        return cur + num
    elif op == 1:
        return cur - num
    elif op == 2:
        return cur * num
    else:
        if cur < 0:
            return -(-cur // num)
        return cur // num

def dfs(idx, cur, target):
    global answer_max, answer_min

    next_val = operate(cur, arr[idx], target)

    if idx == n - 1:
        answer_max = max(answer_max, next_val)
        answer_min = min(answer_min, next_val)
        return

    for op in range(4):
        if ops[op] > 0:
            ops[op] -= 1
            dfs(idx + 1, next_val, op)
            ops[op] += 1

for op in range(4):
    if ops[op] > 0:
        ops[op] -= 1
        dfs(1, arr[0], op)
        ops[op] += 1

print(answer_max)
print(answer_min)