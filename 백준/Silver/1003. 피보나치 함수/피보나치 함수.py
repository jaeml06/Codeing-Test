import sys
read = sys.stdin.readline

T = int(read())


for _ in range(T):
    zero = [1, 0, 1]
    one = [0, 1, 1]
    N = int(read())
    if N >= 3:
        for i in range(2, N):
            zero.append(zero[i-1] + zero[i])
            one.append(one[i-1] + one[i])
    print(f'{zero[N]} {one[N]}')
