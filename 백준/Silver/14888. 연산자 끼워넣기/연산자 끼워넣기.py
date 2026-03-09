import sys
n = int(input())
nums = list(map(int, input().split()))
plus, minus, mul, div = map(int, input().split())

max_val = -sys.maxsize
min_val = sys.maxsize

def dfs(idx, cur, plus, minus, mul, div):
    global max_val, min_val
    
    if idx == n:
        max_val = max(max_val, cur)
        min_val = min(min_val, cur)
        return 
    if plus > 0:
        dfs(idx + 1, cur + nums[idx], plus - 1, minus, mul, div)
    if minus > 0:
        dfs(idx + 1, cur - nums[idx], plus, minus - 1, mul, div)

    if mul > 0:
        dfs(idx + 1, cur * nums[idx], plus, minus, mul - 1, div)

    if div > 0:
        if cur < 0:
            dfs(idx + 1, -(-cur // nums[idx]), plus, minus, mul, div - 1)
        else:
            dfs(idx + 1, cur // nums[idx], plus, minus, mul, div - 1)
dfs(1, nums[0], plus, minus, mul, div)

print(max_val)
print(min_val)