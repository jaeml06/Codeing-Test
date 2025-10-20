string = input()
queries = list(input())

for query in queries:
    if query == 'L':
        string = string[1:] + string[0]
    else:
        string = string[-1] + string[:-1]

print(string)    