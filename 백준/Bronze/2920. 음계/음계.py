arr = list(map(int, input().split()))

if arr == list(range(1, 9)):
    print('ascending')
elif arr == list(range(8, 0, -1)):
    print('descending')
else:
    print('mixed')