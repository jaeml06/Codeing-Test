n = int(input())

count = 0
while n >=0:
    n -= 5
    count += 1
    if n % 2 == 0 and n % 5 != 0:
        count += n // 2
        print(count)
        break

else:
    print(-1)