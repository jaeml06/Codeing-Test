a, b = input().split()
temp = int(a) + int(b)
count = 0
for v in str(temp):
    if v == '1':
        count += 1

print(count)
