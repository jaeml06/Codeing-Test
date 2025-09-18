n, m = map(int, input().split())
arr = list(map(int, input().split()))
queries = [int(input()) for _ in range(m)]

def binary(val):
    left, right = 0, n-1

    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == val:
            return mid
        if arr[mid] > val:
            right = mid - 1
        else:
            left = mid + 1
    
    return -1

for val in queries:
    idx = binary(val)
    print(-1 if idx == -1 else idx + 1)