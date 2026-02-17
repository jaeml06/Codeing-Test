def solution(my_string):
    target = 'aieou'
    for t in target:
        my_string = my_string.replace(t, '')
    return my_string