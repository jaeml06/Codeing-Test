t = int(input())

for _ in range(t):
    s = input()
    temp = 0
    total = 0
    
    for c in s:
        if c == 'O':
            temp += 1
            total += temp
        else:
            temp = 0
    print(total)