string = input()
temp = list(string)
temp2 = ''
for val in temp:
    if temp[1] == val:
        temp2 += temp[0]
    else:
        temp2+= val

print(temp2)