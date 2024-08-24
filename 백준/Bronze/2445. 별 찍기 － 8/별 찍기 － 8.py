import sys
read = sys.stdin.readline

n = int(read())
for i in range(1,n+1):
    print("*" * i + " " * 2*(n-i) + "*" * i)
for j in range(1,n):
    print("*"* (n-j) + " " * 2*j + "*" * (n-j))