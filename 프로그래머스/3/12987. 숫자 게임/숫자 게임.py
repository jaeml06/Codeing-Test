def solution(A, B):
    A.sort()
    B.sort()
    
    score = 0
    j = 0
    
    for b in B:
        if b > A[j]:
            score += 1
            j += 1

            
    return score