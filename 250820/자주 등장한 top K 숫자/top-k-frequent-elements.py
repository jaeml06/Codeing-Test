n, k = map(int, input().split())
arr = list(map(int, input().split()))

temp = {}

for v in arr:
    if v in temp:
        temp[v] += 1
    else:
        temp[v] = 1

temp2 = [(x, y) for x, y in temp.items()]
temp2.sort(key=lambda x: (-x[1], -x[0]))

result = [num for num, _ in temp2[:k]]
print(" ".join(map(str, result)))