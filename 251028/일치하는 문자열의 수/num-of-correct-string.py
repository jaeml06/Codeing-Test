n, string = input().split()

arr = [input() for _ in range(int(n))]

count = 0

for temp in arr:
    if temp == string:
        count += 1

print(count)