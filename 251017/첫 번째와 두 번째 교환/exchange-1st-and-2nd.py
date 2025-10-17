stiring = input()

temp1 = stiring[0]
temp2 = stiring[1]

temp3 = ''

for val in stiring:
    if temp1 == val:
        temp3 += temp2
    elif temp2 == val:
        temp3 += temp1
    else:
        temp3 += val

print(temp3)