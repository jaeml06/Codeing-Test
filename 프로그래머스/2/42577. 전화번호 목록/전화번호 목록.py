def solution(phoneBook):
    phoneBook = sorted(phoneBook)

    for i in range(len(phoneBook)-1):
        a = phoneBook[i]
        b = phoneBook[i + 1]
        if b.startswith(a):
            return False
    return True