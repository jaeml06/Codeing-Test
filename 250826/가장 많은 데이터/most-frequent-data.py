n = int(input())
words = [input() for _ in range(n)]

temp = {}

for word in words:
    if word not in temp:
        temp[word] = 1
    else: 
        temp[word] += 1

ans = max(temp.values())
print(ans)