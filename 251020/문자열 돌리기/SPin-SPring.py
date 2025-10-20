string = input()
l = len(string)

print(string)
for _ in range(l):
    temp = string[-1] + string[:-1]
    print(temp)
    string = temp
