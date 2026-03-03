N = int(input())

for i in range(1, N):
    temp = i
    for t in str(i):
        temp += int(t)
    if temp == N:
        print(i)
        break
else:
    print(0)