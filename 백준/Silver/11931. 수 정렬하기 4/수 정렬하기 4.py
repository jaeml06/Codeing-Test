import sys
read = sys.stdin.readline

N = int(read())

arr = map(int, [read() for _ in range(N)])

arr = sorted(list(set(arr)), reverse=True )

for num in arr:
    print(num)