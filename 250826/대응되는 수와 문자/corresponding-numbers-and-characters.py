n, m = map(int, input().split())

# Note: Using 1-based indexing for words as per C++ code
words = [""] + [input() for _ in range(n)]
queries = [input() for _ in range(m)]

temp1 = {}
temp2 = {}

# Please write your code here.
for idx, val in enumerate(words):
    temp1[val] = idx
    temp2[idx] = val

for query in queries:
    if query.isdecimal():
        print(temp2[int(query)])
    else:
        print(temp1[query]) 
