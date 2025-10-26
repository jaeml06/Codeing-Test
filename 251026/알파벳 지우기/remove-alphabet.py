temp1 = input()
temp2 = input()

a = ''
b = ''

for v in temp1:
    if '0'<= v and v <= '9':
        a += v


for v in temp2:
    if '0'<= v and v <= '9':
        b += v


print(int(a) + int(b))