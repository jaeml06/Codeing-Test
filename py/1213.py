name = input()

name_num = [0 for i in range(26)]

for i in name:
    name_num[ord(i)-65] += 1

countOdd = 0
text = ''
textOdd = ''
for i in range(26):
    if name_num[i] % 2 == 1:
        countOdd += 1
        if (countOdd > 1):
            print("I'm Sorry Hansoo")
            exit(0)

        textOdd += chr(i+65)
    text += chr(i+65) * (name_num[i]//2)

print(text+textOdd+"".join(reversed(text)))
