import sys
read = sys.stdin.readline

T = int(read())

for _ in range(T):
    str = read().rstrip()
    print(str[0] + str[-1])