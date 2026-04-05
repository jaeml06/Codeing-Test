n = int(input())
arr = [int(input()) for _ in range(n)]

cnt = 0
for a in arr:
    if a % 2 != 0:
        cnt +=1
print(cnt)