n = int(input())

for i in range(n):
    temp = []
    for j in range(n):
        temp.append(i + 1 + j * n) 
    print(*temp)