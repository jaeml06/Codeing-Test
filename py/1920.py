N = int(input())
A = list(map(int, input().split()))
M = int(input())
data = list(map(int, input().split()))

A.sort()

for i in data:
    left = 0
    right = len(A)-1
    s = 0
    while left <= right:
        mid = (left+right)//2
        if A[mid] == i:
            s = 1
            print(s)
            break
        elif A[mid] < i:
            left = mid+1
        elif A[mid] > i:
            right = mid-1
    if s == 0:
        print(s)
