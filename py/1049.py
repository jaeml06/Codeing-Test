n, m = map(int, input().split())
fullList = []
oneList = []
for _ in range(m):
    full, one = map(int, input().split())
    fullList.append(full)
    oneList.append(one)

fullList.sort()
oneList.sort()

count = 0
while n > 0:
    if fullList[0] <= oneList[0]*6:
        if n > 6:
            n -= 6
            count += fullList[0]
        else:
            if (fullList[0] > oneList[0]*n):
                n -= 1
                count += oneList[0]
            else:
                n -= 6
                count += fullList[0]

    else:
        n -= 1
        count += oneList[0]

print(count)
