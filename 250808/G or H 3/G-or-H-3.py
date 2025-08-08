n, k = map(int, input().split())
x = []
c = []
for _ in range(n):
    pos, char = input().split()
    x.append(int(pos))
    c.append(char)

# Please write your code here.
arr = [0] * 10001

for pos, char  in zip(x, c):
    if char == 'G':
        arr[pos] = 1
    if char == 'H':
        arr[pos] = 2

temp = -1
for i in range(1, 10001 - k + 1):
    temp = max(temp, sum(arr[i:i+k+1]))

print(temp)