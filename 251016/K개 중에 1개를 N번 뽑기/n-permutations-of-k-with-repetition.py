import sys
sys.setrecursionlimit(10**7)
K, N = map(int, input().split())

# Please write your code here.
temp = []
def permutations(cnt):
    if cnt == N:
        for num in temp:
            print(num, end=' ')
        print()
        return


    for i in range(1, K + 1):
        temp.append(i)
        permutations(cnt + 1)
        temp.pop()

permutations(0)
