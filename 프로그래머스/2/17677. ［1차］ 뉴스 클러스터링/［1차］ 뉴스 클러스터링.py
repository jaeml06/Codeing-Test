from collections import Counter

def solution(str1, str2):

    def make_multiset(s):
        s = s.lower()
        arr = []
        for i in range(len(s) - 1):
            a = s[i:i+2]
            if 'a' <= a[0] <= 'z' and 'a' <= a[1] <= 'z':
                arr.append(a)
        return arr

    A = Counter(make_multiset(str1))
    B = Counter(make_multiset(str2))

    inter = sum((A & B).values())
    union = sum((A | B).values())

    if union == 0:
        return 65536
    
    return int(inter / union * 65536)