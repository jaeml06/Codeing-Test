def solution(A, B):
    for i in range(len(A)):
        if A == B:
            return i
        A = A[-1] + A[:-1]
        print(A)
    else:
        return -1
    return -1