string = input()

# Please write your code here.

temp = {}

for s in string:
    if s in temp:
        temp[s] += 1
    else:
        temp[s] = 1

flag = True
for key, val in temp.items():
    if val == 1:
        flag= False
        print(key)
        break
if flag:
    print('None')


    