def solution(age):
    mapping = 'abcdefghij'
    ans = []
    for ch in str(age):
        ans.append(mapping[int(ch)])
    return ''.join(ans)