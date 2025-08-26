n = int(input())
words = [input() for _ in range(n)]

# Please write your code here.
temp = {}
for word in words:
    string = ''.join(sorted(word))
    
    if string not in temp:
        temp[string] = 1
    else:
        temp[string] += 1

ans = max(temp.values())
print(ans)