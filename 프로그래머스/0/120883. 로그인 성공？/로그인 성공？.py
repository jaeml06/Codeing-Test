def solution(id_pw, db):
    answer = ''
    u_id, u_pw = id_pw
    db_dict = dict(db)
    
    if u_id not in db_dict:
        return 'fail'
        
    return 'login' if db_dict[u_id] == u_pw else 'wrong pw'