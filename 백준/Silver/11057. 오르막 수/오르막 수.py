import sys
read = sys.stdin.readline

n = int(read())
memo = {}
def dp(n, last):
  depth = 0
  if n == 1:
    return 1
  if (n, last) in memo:
    return memo[(n, last)]
  if (n, last) not in memo:
    for i in range(last + 1):
      depth += dp(n-1, i)
  memo[(n, last)] = depth
  return memo[(n, last)]  

print(sum(dp(n, last) for last in range(0, 10))%10007)

