import sys
read = sys.stdin.readline

word = read()


temp = "aeiou"
count = 0

for char in word:
    if char in temp:
        count += 1
print(count)