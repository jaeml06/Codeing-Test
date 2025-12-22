import math
def solution(fees, records):
    base_time, base_fee, unit_time, unit_fee = fees

    def to_minutes(t):
        h, m = map(int, t.split(":"))
        return h * 60 + m
    
    in_time = {}
    total = {}
    
    for rec in records:
        t, car, typ = rec.split()
        t = to_minutes(t)
        
        if typ == 'IN':
            in_time[car] = t
        else:
            start = in_time.pop(car)
            total[car] = total.get(car, 0) + (t - start)
            
    end = to_minutes("23:59")
    for car, start in in_time.items():
        total[car] = total.get(car, 0) + (end - start)
    result = []
    for car in sorted(total.keys()):
        time = total[car]
        fee = base_fee
        if time > base_time:
            fee += math.ceil((time - base_time) / unit_time) * unit_fee
        result.append(fee)
        
    return result
    