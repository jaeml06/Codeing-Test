n = int(input())
a = list(map(int, input().split()))

m = int(input())
b = list(map(int, input().split()))

# Please write your code here.
a = set(a)

for val in b:
    if val not in a:
        print(0)
    else:
        print(1)