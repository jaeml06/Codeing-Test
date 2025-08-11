X, Y = map(int, input().split())

# Please write your code here.
max_cnt = 0
for i in range(X, Y + 1):
    temp = str(i)
    count=0
    for j in temp:
        count += int(j)
    max_cnt = max(max_cnt, count)
print(max_cnt)