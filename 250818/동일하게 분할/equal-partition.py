n = int(input())
arr = list(map(int, input().split()))

total = sum(arr)
if total % 2 != 0:
    print('No')
else:
    target = total // 2
    dp = [False] * (target + 1)
    dp[0] = True
    for val in arr:
        for i in range(target, -1, -1):
            if i - val >=0 and dp[i - val]:
                dp[i] = True
    print('Yes' if dp[target] else 'No')