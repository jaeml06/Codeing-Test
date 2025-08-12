A, B, C = map(int, input().split())

# Please write your code here.
i = 0
max_sun = 0
while A * i <= C:
    j = 0
    while A * i + B * j <= C:
        max_sun = max(max_sun, A * i + B * j)
        j+=1
    
    i+=1
print(max_sun)

