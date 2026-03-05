n = int(input())
cnt = 0
set1 = set()
for _ in range(n):
    temp = input()
    if temp != 'ENTER':
        set1.add(temp)
    else:
        cnt+=len(set1)
        set1.clear()
cnt += len(set1)
print(cnt)