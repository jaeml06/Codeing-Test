n = int(input())
arr = list(map(int, input().split()))

# Please write your code here.
cnt = 0
for i in range(n):
    for j in range(i, n):
        temp = sum(arr[i:j+1])

        exist = False
        avg = temp / (j + 1 - i)
        for k in range(i, j+1):
            if(arr[k] == avg):
                exist = True
        
        if exist:
            cnt +=1

print(cnt)