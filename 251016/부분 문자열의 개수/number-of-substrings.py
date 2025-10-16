string = input()
target = input()

count1 = 0
for i in range(len(string) - len(target) + 1):
    if string[i:i + len(target)] == target:
        count1 += 1


print(f'{count1}')