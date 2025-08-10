k, n = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(k)]

# Please write your code here.

temp = {}
for i in range(k):
    for j in range(n):
        for l in range(j + 1, n):
            t1 = arr[i][j]
            t2 = arr[i][l]
            temp[(t1, t2)] = temp[(t1, t2)] + 1 if temp.get((t1, t2)) else 1

cnt = 0
for i in temp.values():
    if i == k:
        cnt +=1
            
print(cnt)