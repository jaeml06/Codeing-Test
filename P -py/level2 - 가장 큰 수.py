def solution(numbers):
    data = list(map(str, numbers))
    data.sort(key=lambda x: x*3, reverse = True) 
    # lambda 함수를 사용 
    # key는 정렬 대상을 지정
    # numbers의 원소가 1000까지 이기에 x*3
    answer=''
    for i in data:
        answer+=i
    
    return str(int(answer))