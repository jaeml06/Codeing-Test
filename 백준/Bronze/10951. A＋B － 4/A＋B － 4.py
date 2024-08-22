import sys
read = sys.stdin.readline

for line in sys.stdin:
    A, B = map(int, line.split())
    print(A + B)