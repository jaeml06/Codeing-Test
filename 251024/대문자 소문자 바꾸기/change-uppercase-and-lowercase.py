string = input()
ans = ''

for val in string:
    if 'a' <= val and val <='z':
        ans += val.upper()
    else:
        ans += val.lower()

print(ans)