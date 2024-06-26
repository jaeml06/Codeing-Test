import sys
read = sys.stdin.readline
N = int(read())
book = [read().strip() for _ in range(N)]

book_set = {}
for name in book:
    if(name not in book_set):
        book_set[name] = 1
    else : 
        book_set[name] = book_set[name] + 1

arr = list(book_set.items())

arr.sort(key=lambda x : (-x[1], x[0]))
print(arr[0][0])