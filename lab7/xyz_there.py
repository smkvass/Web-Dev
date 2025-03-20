def xyz_there(str):
    return "xyz" in str.replace(".xyz", "")

str = input()
print(xyz_there(str))
