n = int(input())

# Please write your code here.
temp = []

while True:
    if n < 2:
        temp.append(n)
        break

    temp.append(n%2);
    n //= 2
for a in temp[::-1]:
    print(a, end='')

