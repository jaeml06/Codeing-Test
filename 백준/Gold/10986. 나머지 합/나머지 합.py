n, m = map(int, input().split())

arr = [0] + list(map(int, input().split()))

count = [0] * m
prefix = 0
result = 0

for num in arr:
    prefix += num
    count[prefix % m] += 1

for c in count:
    result += c * (c - 1) // 2
print(result)
        