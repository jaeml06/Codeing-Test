import sys
read = sys.stdin.readline

str = read().strip()

str = str.replace('XXXX', 'AAAA')
str = str.replace('XX', 'BB')

if 'X' in str:
    print(-1)
else:
    print(str)
