import sys
n = int(input())
num = list(map(int, input().split()))
sum_num = sum(num)
ans = sys.maxsize
def dfs(index, cnt, cur_val):
    global ans
    if cnt == n:
        ans = min(ans, abs(sum_num - cur_val * 2))
        return
    if index == 2*n:
        return
    
    dfs(index + 1, cnt, cur_val)

    dfs(index + 1, cnt + 1, cur_val + num[index])


dfs(0, 0, 0)

print(ans)
