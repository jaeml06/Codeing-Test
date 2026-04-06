arr = [int(input()) for _ in range(9)]

a = max(arr)
b = arr.index(a) + 1

print(a)
print(b)