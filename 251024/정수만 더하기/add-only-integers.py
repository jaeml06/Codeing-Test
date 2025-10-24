A = input()

temp = 0
for val in A:
    if '0' <= val and val <= '9':
        temp += int(val)

print(temp)