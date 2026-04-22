n = int(input())

if n % 2 == 0 and sum([x for x in map(int, str(n))]) % 5 == 0:
    print('Yes')
else:
    print('No')