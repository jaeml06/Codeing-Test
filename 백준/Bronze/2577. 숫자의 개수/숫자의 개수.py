a = int(input())
b = int(input())
c = int(input())

temp = a * b * c

cnt1 = 0
cnt2 = {}
for v in str(temp):
    if v == '0':
        cnt1 += 1
    else:
        cnt2[v] = cnt2.get(v, 0) + 1
print(cnt1)

for i in range(1, 10):
     print(cnt2.get(str(i), 0))