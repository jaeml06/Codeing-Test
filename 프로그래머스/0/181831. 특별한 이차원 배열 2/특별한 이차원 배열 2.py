def solution(arr):
    n = len(arr)
    m = len(arr[0])
    flag = True
    for i in range(n):
        for j in range(m):
            if arr[i][j] != arr[j][i]:
                flag = False
                
    return 1 if flag else 0