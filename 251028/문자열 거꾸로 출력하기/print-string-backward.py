while True:
    temp = input()
    if 'END' == temp:
        break
    print(''.join(list(reversed(temp))))