input_str, q = input().split()
q = int(q)
queries = [int(input()) for _ in range(q)]
temp = input_str

# Please write your code here.

for query in queries:
    if query == 1:
        print(temp[1:] + temp[0])
        temp = temp[1:] + temp[0]
    elif query == 2:
        print(temp[-1] + temp[:-1])
        temp = temp[-1] + temp[:-1]
    elif query == 3:
        print(temp[::-1])
        temp = temp[::-1]

