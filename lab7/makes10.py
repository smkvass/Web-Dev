def makes10(a, b):
    if a == 10 or b == 10 or a + b == 10:
       return True
    return False

a = int(input())
b = int(input())
print(makes10(a, b))