string = input()

for val in string:
    if val.isalpha():
        print(val.upper(), end='')