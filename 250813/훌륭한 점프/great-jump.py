n, k = map(int, input().split())
arr = list(map(int, input().split()))

for i in range(max(arr[0], arr[n-1]), 101):
    last_idx = 0
    flag= True
    for j in range(1, n):
        if arr[j] <= i:
            if j - last_idx > k:
                flag = False
            last_idx = j
    
    if flag:
        print(i)
        break
