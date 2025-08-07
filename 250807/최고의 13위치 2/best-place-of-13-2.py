n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]

# Please write your code here.
maxcount = 0
for i in range(n):
    for j in range(0, n-2):
        for k in range(n):
            for l in range(0, n-2):
                cnt = 0
                if i == k and abs(l - j) < 3:
                    continue
                cnt = (
                    arr[i][j] + arr[i][j+1] + arr[i][j+2] +
                    arr[k][l] + arr[k][l+1] + arr[k][l+2])
                maxcount = max(maxcount, cnt)

print(maxcount)