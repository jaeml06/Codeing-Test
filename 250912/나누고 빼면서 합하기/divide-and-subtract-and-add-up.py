n, m = map(int, input().split())
A = list(map(int, input().split()))

def cal():
    global m
    ans = 0
    while m != 1:
        
        ans += A[m-1]
        if m % 2 == 0:
            m //= 2
        else:
            m -= 1
        
    return ans

print(cal() + A[0])