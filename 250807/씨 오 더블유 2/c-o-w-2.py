n = int(input())
S = input()

# Please write your code here.

def zo(nums):
    ans = []

    def bfs(start, path):
        if len(path) == nums:
            ans.append(path[:])
            return
        for i in range(start, len(S)):
            path.append(S[i])
            bfs(i + 1, path)
            path.pop()
    
    bfs(0, [])
    return ans

cnt = 0
for word in zo(3):
    if ''.join(word) == 'COW':
        cnt +=1

print(cnt)