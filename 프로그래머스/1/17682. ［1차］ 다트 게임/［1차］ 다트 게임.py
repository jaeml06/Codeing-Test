def solution(dartResult):
    scores = []
    num_str = ''
    
    for char in dartResult:
        if char.isdigit():
            num_str += char
            
        elif char in ['S', 'D', 'T']:
            score = int(num_str)
            
            if char == 'D':
                score = score ** 2
            elif char == 'T':
                score = score ** 3
            scores.append(score)
            num_str = ''
        
    
        if char == '*':
            scores[-1] *= 2
            
            if len(scores) > 1:
                scores[-2] *= 2
        elif char == '#':
            scores[-1] *= -1
            
    return sum(scores)