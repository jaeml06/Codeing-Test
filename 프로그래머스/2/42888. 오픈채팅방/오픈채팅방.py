def solution(record):
    uid_to_name = {}
    logs = []
    
    for r in record:
        parts = r.split()
        command = parts[0]
        uid = parts[1]
        
        if command == 'Enter':
            nickname = parts[2]
            uid_to_name[uid] = nickname
            logs.append((uid, 'Enter'))
        elif command == 'Leave':
            logs.append((uid, 'Leave'))
        elif command == 'Change':
            nickname = parts[2]
            uid_to_name[uid] = nickname
    answer = []
    for uid, command in logs:
        name = uid_to_name[uid]
        if command == 'Enter':
            answer.append(f"{name}님이 들어왔습니다.")
        else:
            answer.append(f'{name}님이 나갔습니다.')
    return answer