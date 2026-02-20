def solution(dots):
    xs = [x for x, y in dots]
    ys = [y for x, y in dots]
    
    width = max(xs) - min(xs)
    height = max(ys) - min(ys)
    
    return width * height