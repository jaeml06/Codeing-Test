string, n1 = input().split(' ')
n = int(n1)

for _ in range(n):
    q, a, b = input().split(' ')
    if q == '1':
        temp1 = string[int(a) - 1]
        temp2 = string[int(b) - 1]
        temp3 = list(string)
        temp3[int(a) - 1] = temp2
        temp3[int(b) - 1] = temp1
        string = ''.join(temp3)
    else:
        temp3 = list(string)
        temp = ''
        for val in temp3:
            if val == a:
                temp += b
            else:
                temp += val
        string = temp
    print(string)

