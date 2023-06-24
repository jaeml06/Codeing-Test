def solution(phone_book):
    # Hash map을 만든다
    hash_map = {}
    for phone_number in phone_book:
        hash_map[phone_number] = 1
    
    # 접두어가 Hash map에 존재하는지 찾는다
    for phone_number in phone_book:
        jubdoo = ""
        for number in phone_number:
            jubdoo += number
            #접두어를 찾아야 한다 (기존 번호와 같은 경우 제외)
            if jubdoo in hash_map and jubdoo != phone_number:
                return False
    return True

"""
def solution(phoneBook):
    phoneBook = sorted(phoneBook)

    for p1, p2 in zip(phoneBook, phoneBook[1:]):
        if p2.startswith(p1):
            return False
    return True
"""

"""def solution(phone_book):
    answer = True
    phone_book_len = len(phone_book)
    for i in range(phone_book_len):
        strLen = len(phone_book[i])
        for j in range( phone_book_len):
            if phone_book[i] == phone_book[j]:
                continue
            elif phone_book[i] == phone_book[j][0:strLen]:
                answer = False 
                return answer
            
    
    return answer
    """