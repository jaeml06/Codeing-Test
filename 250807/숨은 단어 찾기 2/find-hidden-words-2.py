n, m = map(int, input().split())
arr = [input() for _ in range(n)]

cnt = 0
for i in range(n):
    for j in range(m - 2):
        temp = arr[i][j] + arr[i][j+1] + arr[i][j+2]
        if temp == 'LEE' or temp == 'EEL':
            cnt +=1

for i in range(n - 2):
    for j in range(m):
        temp = arr[i][j] + arr[i+1][j] + arr[i+2][j]
        if temp == 'LEE' or temp == 'EEL':
            cnt += 1

for i in range(n - 2):
    for j in range(m - 2):
        temp = arr[i][j] + arr[i+1][j+1] + arr[i+2][j+2]
        if temp == 'LEE' or temp == 'EEL':
            cnt += 1
for i in range(n - 2):
    for j in range(m - 2):
        temp = arr[i+2][j] + arr[i+1][j+1] + arr[i][j+2]
        if temp == 'LEE' or temp == 'EEL':
            cnt += 1
print(cnt)