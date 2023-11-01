import sys;
input = sys.stdin.readline
N = int(input())
dp =[0] * (91)
dp[1] = 1
dp[2] = 1
dp[3] = dp[1] + 1
if(N == 1):
    print(dp[N])
elif(N == 2):
    print(dp[N])
elif(N == 3):
    print(dp[N])
else:
    for i in range(4, N+1):
        for j in range(1, i-1):
            dp[i]+=dp[j]
        dp[i] += 1
    print(dp[N])