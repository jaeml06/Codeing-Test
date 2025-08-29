n, m = map(int, input().split())
arr = list(map(int, input().split()))
queries = [int(input()) for _ in range(m)]

def find(target):
    left, right = 0, n - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        
        if arr[mid] > target:
            right = mid - 1
        else:
            left = mid + 1
    return -1

for querie in queries:
    index = find(querie)
    print(-1 if index == -1 else index + 1)
