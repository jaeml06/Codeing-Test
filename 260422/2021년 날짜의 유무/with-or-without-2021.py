M, D = map(int, input().split())

def get_days(m):
    if m in [1, 3, 5, 7, 8, 10, 12]:
        return 31
    elif m in [4, 6, 9, 11]:
        return 30
    else:
        return 28

if 1 <= M <= 12 and 1<= D <= get_days(M):
    print('Yes')
else:
    print('No')