n = int(input())
map1 = {
        'Algorithm': '204', 
        'DataAnalysis' : '207', 
        'ArtificialIntelligence': '302',
        'CyberSecurity':'B101',
        'Network': '303',
        'Startup': '501',
        'TestStrategy': '105',
       }

arr = [input() for _ in range(n)]
for a in arr:
    print(map1[a])