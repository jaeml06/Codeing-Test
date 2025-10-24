string = input()
temp = ''

for val in string:
    if val.isalpha():
        temp += val.lower()
    elif val.isnumeric():
        temp += str(val)

print(temp)

