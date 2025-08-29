from bisect import bisect_left
n, m = map(int, input().split())
arr = list(map(int, input().split()))
queries = list(map(int, input().split()))

for query in queries:
    i = bisect_left(arr, query)
    print(i+1 if i < n and arr[i] == query else -1)