import sys
read = sys.stdin.readline

N = int(read())

def factorial(n):
    ret = 1
    for i in range(1, n+1):
        ret *= i
    return ret
print(factorial(N))