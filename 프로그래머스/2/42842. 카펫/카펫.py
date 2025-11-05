def solution(brown, yellow):
    total = brown + yellow
    
    for height in range(3, int(total ** 0.5) + 1):
        if total % height == 0:
            width = total // height
            if (width - 2) * (height - 2) == yellow:
                return [width, height]