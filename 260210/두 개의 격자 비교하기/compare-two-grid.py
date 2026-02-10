n, m = map(int, input().split())

arr1 = [list(map(int, input().split())) for _ in range(n)]
arr2 = [list(map(int, input().split())) for _ in range(n)]

answer = []

for i in range(n):
    temp = []
    for j in range(m):
        if arr1[i][j] != arr2[i][j]:
            temp.append(1)
        else:
            temp.append(0)
    answer.append(temp)

for a in answer:
    print(*a)