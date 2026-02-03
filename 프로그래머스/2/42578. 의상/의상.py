def solution(clothes):
    product = {}
    for v, k in clothes:
        if k not in product:
            product[k] = []
        product[k].append(v)
    answer = 1
    
    for k in product:
        answer *= (len(product[k]) + 1)
        
    return answer - 1
    