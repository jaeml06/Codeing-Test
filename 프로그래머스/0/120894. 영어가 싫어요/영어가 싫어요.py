def solution(numbers):
    words = ["zero","one","two","three","four","five","six","seven","eight","nine"]
    
    for i in range(10):
        numbers = numbers.replace(words[i], str(i))

    return int(numbers)