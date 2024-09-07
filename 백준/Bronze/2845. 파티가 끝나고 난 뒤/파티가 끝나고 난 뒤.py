import sys
read = sys.stdin.readline

L, P = map(int, read().split())
default = L * P

arr = list(map(int, read().split()))

answer = [i - default for i in arr]

print(' '.join(map(str, answer)))