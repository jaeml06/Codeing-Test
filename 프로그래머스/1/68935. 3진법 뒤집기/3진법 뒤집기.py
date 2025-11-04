def solution(n):
    def trans(n, q):
        rev_base = ''
        while n > 0:
            n, mod = divmod(n, q)
            rev_base += str(mod)
        return rev_base[::-1]

    reversed_base3 = trans(n, 3)[::-1]
    answer = int(reversed_base3, 3)
    return answer