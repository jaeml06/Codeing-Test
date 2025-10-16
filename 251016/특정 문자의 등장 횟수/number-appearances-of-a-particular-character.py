string = input()

count1 = 0
count2 = 0
for i in range(len(string) - 1):
    if string[i] + string[i+1] == 'ee':
        count1 += 1

for i in range(len(string) - 1):
    if string[i] + string[i+1] == 'eb':
        count2 += 1

print(f'{count1} {count2}')