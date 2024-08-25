import sys
read = sys.stdin.readline

def find_lexicographically_smallest(word):
    n = len(word)
    min_word = None
    
    # 두 개의 인덱스 i, j를 선택하여 단어를 세 부분으로 나눕니다.
    for i in range(1, n-1):
        for j in range(i+1, n):
            # 세 부분으로 나누고, 각 부분을 뒤집습니다.
            part1 = word[:i][::-1]
            part2 = word[i:j][::-1]
            part3 = word[j:][::-1]
            
            # 뒤집은 세 부분을 합칩니다.
            new_word = part1 + part2 + part3
            
            # 가장 사전순으로 앞서는 단어를 찾습니다.
            if min_word is None or new_word < min_word:
                min_word = new_word
    
    return min_word

# 입력받기
word = read().strip()

# 결과 출력
result = find_lexicographically_smallest(word)
print(result)