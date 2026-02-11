def solution(balls, share):
    def fact(x):
        res = 1
        for i in range(2, x + 1):
            res *= i
        return res
    
    return fact(balls) // (fact(share) * fact(balls - share))