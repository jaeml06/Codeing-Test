A = input().strip()
B = input().strip()
count = 0
flag = False

for _ in range(len(A)):
    if A == B:
        flag = True
        break
    count += 1
    A = A[-1] + A[:-1] 

print(count if flag else -1)