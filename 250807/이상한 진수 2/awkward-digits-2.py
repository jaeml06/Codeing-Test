a = input()

# Please write your code here.
answer = 0
for i in range(len(a)):
    temp = list(a[:])
    if temp[i] == '1':
        temp[i] = '0'
    else:
        temp[i] = '1'
    answer = max(answer, int(''.join(temp), 2))

print(answer)
        



    