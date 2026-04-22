Y, M, D = map(int, input().split())

def is_leap(y):
    return (y % 4 == 0 and y % 100 != 0) or (y % 400 == 0)

def get_day(y, m):
    if m in [1, 3, 5, 7, 8, 10, 12]:
        return 31
    elif m in [4, 6, 9, 11]:
        return 30
    elif m == 2:
        return 29 if is_leap(y) else 28
    return 0

days = get_day(Y, M)

if D < 1 or D > days:
    print(-1)
else:
    if M in [3, 4, 5]:
        print("Spring")
    elif M in [6, 7, 8]:
        print("Summer")
    elif M in [9, 10, 11]:
        print("Fall")
    else:
        print("Winter")