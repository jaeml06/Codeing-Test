N, M = map(int, input().split())
w, v = zip(*[tuple(map(int, input().split())) for _ in range(N)])
w, v = list(w), list(v)

# Please write your code here.
temp = []
for i in range(N):
    temp.append((v[i]/w[i], w[i]))
temp.sort(reverse = True)
#print(temp)
ans = 0
for val in temp:
        count = 0
        for i in range(1, val[1] + 1):
            if M >= i:
                count += 1
        ans += count * val[0]
        M -= count
    
print(f'{ans:.3f}')