
lang = {1: 'Java', 2: 'C++', 3: 'JavaScript', 4: 'Python'}
cp = lang.copy() # get a copy from a dictionary

# delete all dictionary elements
cp.clear()
print(cp)


# get all dictionary items as key and value

print(lang.items())


# get Dictionary keys 
print(lang.keys())

# get dictionary values only
print(lang.values())

# delete a element by keys from dictionary and return it
lang.pop(2)
print(lang)

# update dictionary key 

lang.update({3: 'JavaScript'})
print(f'Dictionary after a update: {lang}')
