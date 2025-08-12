N = int(input())
str1 = input()

# Please write your code here.

for i in range(1, N):
    flag = False
    for j in range(N - i + 1):
        temp = str1[j: j + i]
        cnt = 0
        for l in range(N - i + 1):
            temp2 = str1[l: l + i]
            if temp == temp2:
                cnt+=1
        if cnt >= 2:
            flag = True
    
    if flag:
        continue
    print(i)
    break
            
