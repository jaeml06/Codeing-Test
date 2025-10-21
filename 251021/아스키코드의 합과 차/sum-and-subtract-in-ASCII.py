a, b = input().split()
ans1 = ord(a) + ord(b)
ans2 = ord(a) - ord(b) if ord(a) - ord(b) > 0 else -(ord(a) - ord(b)) 
print(ans1, ans2)