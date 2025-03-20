def combo_string(a, b):
    return a + b + a if len(a) < len(b) else b + a + b

a = input()
b = input()
print(combo_string(a, b))