def solution(n, words):
    used = set()
    used.add(words[0])
    
    for i in range(1, len(words)):
        word = words[i]
        if word in used or words[i - 1][-1] != word[0]:
            p = (i % n) + 1
            t = (i // n) + 1
            return [p, t]
        used.add(word)
    return [0, 0]
    
    