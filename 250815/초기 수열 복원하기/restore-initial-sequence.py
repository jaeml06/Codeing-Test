import sys
n = int(input())
adjacent = list(map(int, input().split()))
arr = [0] * n

for i in range(1, n + 1):
    arr[0] = i

    for j in range(1, n):
        arr[j] = adjacent[j-1] - arr[j-1]

    satisfied = True
    exist = [False] * 1001
    for j in range(n):
        if arr[j] <= 0 or arr[j] > n:
            satisfied = False
        else:
            if exist[arr[j]]:
                satisfied = False
            exist[arr[j]] = True
    
    if satisfied:
        for j in range(n):
            print(arr[j], end=' ')
        sys.exit()