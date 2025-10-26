temp1, temp2 = input().split()

a = ''
b = ''

for v in temp1:
    if '0'<= v and v <= '9':
        a += v
    else:
        break 

for v in temp2:
    if '0'<= v and v <= '9':
        b += v
    else:
        break 

print(int(a) + int(b))