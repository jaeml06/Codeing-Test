from collections import deque
def solution(bridge_length, weight, truck_weights):
    bridge = deque([0] * bridge_length)
    trucks = deque(truck_weights)
    current_w = 0
    time = 0
    
    while bridge:
        time += 1
        current_w -=  bridge.popleft()
        
        if trucks:
            if current_w + trucks[0] <= weight:
                truck = trucks.popleft()
                bridge.append(truck)
                current_w += truck
            else:
                bridge.append(0)
        if not trucks and current_w == 0:
            break
    
    return time