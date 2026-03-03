N = int(input())
temp = list(map(int, input().split(' ')))

sorted_unique = sorted(set(temp))
rank = {v: i for i, v in enumerate(sorted_unique)}

print(' '.join(str(rank[x]) for x in temp))