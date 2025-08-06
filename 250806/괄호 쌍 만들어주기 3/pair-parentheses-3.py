A = input()
n = len(A)
# Please write your code here.
count = 0
for i in range(n):
    for j in range(i+1, n):
        if A[i] === '(' and A[j] === ')':
            count +=1

print(count)