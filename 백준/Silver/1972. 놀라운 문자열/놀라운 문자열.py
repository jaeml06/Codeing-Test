import sys
read = sys.stdin.readline

while True:
    S = input().rstrip()
    if S == "*":
        break
    for index in range(1, len(S) - 1):
        dic = set()
        for i in range(len(S) - index):
            temp = S[i] + S[i+index]
            if temp in dic:
                print(S + ' is NOT surprising.')
                break
            dic.add(temp)
        else:
            continue
        break
    else:
        print(S + ' is surprising.')
        
    
