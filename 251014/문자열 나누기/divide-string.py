n = int(input())

string = input().split()

temp = ''
for i in range(n):
    temp += string[i]

for i in range(len(temp)):
    print(temp[i], end='')
    if (i + 1) % 5 == 0:
        print()