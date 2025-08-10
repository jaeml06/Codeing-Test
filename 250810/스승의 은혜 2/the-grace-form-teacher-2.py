N, B = map(int, input().split())
P = [int(input()) for _ in range(N)]

# Please write your code here.
ans = 0
for i in range(N):
    tmep = P[:]
    tmep[i] = tmep[i] // 2

    tmep.sort()

    price = 0
    student = 0
    for j in range(N):
        if price + tmep[j] <= B:
            price += tmep[j]
            student+=1
    ans = max(ans, student)
    

print(ans)