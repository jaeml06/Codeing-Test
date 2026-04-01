n = int(input())
arr = list(map(int, input().split()))

t_m = max(arr)
arr = list(map(lambda x: x / t_m * 100, arr))
print(sum(arr) / n)