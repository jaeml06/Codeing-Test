arr = []
i = 0
while True:
    temp = input()
    i += 1
    if temp == '0':
        break
    if i % 2 == 1:
        arr.append(temp)

print(i-1)
print('\n'.join(arr))

