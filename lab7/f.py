x = input()
reverse = "" #храним перевернутое число

for i in reversed(x): #итерируемся в обратном строке
    reverse += i

print(int(reverse))