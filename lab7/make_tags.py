def make_tags(tag, word):
    return "<" + tag + ">" + word + "</" + tag + ">"

tag = input()
word = input()
print(make_tags(tag, word))