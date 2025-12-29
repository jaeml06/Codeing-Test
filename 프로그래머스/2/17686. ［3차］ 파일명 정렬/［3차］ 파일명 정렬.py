def solution(files):
    parsed = []
    
    for idx, file in enumerate(files):
        head = ''
        number = ''
        i = 0
        
        while i < len(file) and not file[i].isdigit():
            head += file[i]
            i+=1
        while i < len(file) and file[i].isdigit() and len(number) < 5:
            number += file[i]
            i += 1
        parsed.append((head, number, idx, file))
        
    parsed.sort(key=lambda x: (x[0].upper(), int(x[1]), x[2]))
    
    return [file for _, _, _, file in parsed]