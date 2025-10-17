string = list(input())

string[1] = 'a'
string[len(string) - 2] = 'a'

print(''.join(string))

