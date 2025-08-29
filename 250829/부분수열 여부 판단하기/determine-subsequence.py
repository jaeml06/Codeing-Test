n, m = map(int, input().split())
A = list(map(int, input().split()))
B = list(map(int, input().split()))


A_len = len(A)
B_len = len(B)

i = 0
j = 0
while i < A_len and j < B_len:
    if A[i] == B[j]:
        j += 1
    i += 1

if j == B_len:
    print('Yes')
else:
    print('No')
