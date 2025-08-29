from bisect import bisect_left, bisect_right
n, m = map(int, input().split())
arr = list(map(int, input().split()))
queries = [int(input()) for _ in range(m)]

for querie in queries:
    i = bisect_left(arr, querie)
    j = bisect_right(arr, querie)

    print(j - i)