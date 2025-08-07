A = input()
n = len(A)
# Please write your code here.

cnt = 0
for i in range(n-1):
    for j in range(i + 2, n - 1):
        if A[i] == '(' and A[i+1] == '(' and A[j] == ')' and A[j+1] == ')':
            cnt += 1
print(cnt)