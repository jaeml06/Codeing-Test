X, Y = map(int, input().split())

# Please write your code here
cnt = 0
for i in range(X, Y + 1):
    temp = str(i)[::-1]

    if str(i) == temp:
        cnt+=1
print(cnt)