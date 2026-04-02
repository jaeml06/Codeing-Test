a = input()
b = input()
c = input()

if a.isnumeric():
    n = int(a) + 3
elif b.isdigit():
    n = int(b) + 2
else:
    n = int(c) + 1

if n % 15 == 0:
    print('FizzBuzz')
elif n % 3 == 0:
    print('Fizz')
elif n % 5 == 0:
    print('Buzz')
else:
    print(n)