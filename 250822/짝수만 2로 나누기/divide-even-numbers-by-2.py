n = int(input())
arr = list(map(int, input().split()))


array = [i if i % 2 == 1 else i // 2 for i in arr]
print(' '.join(map(str,array)))