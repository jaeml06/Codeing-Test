import sys
read = sys.stdin.readline

N = int(read())
arr = list(map(int, read().split()))
num = int(read())

print(arr.count(num))