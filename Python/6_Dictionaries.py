Dic = {1: 'Ahmed', 2: "Ali"}
print(Dic)
print(Dic[1+1])


# dictionaries keys

# dictionary can use key width different datatype

dic = {'Name': 'Ahmed', 'num': [1, 2, 3, 4]}
print(dic['Name'])

# different way to create dictionary
# 1- using dict Constructor
dic = dict({1 : "Night Moon", 2 : "Faire Teal"})
print(dic)


# 2 - using dict Constructor with key-value pairs specified within curly braces and as a list of tuples.
dic = dict([(1, 'Do math'), (2, 'learn React basics')])
print(dic[1])


# Nested Dictionaries

dic = dict([(1, 'Geeks'), (2, 'For'), (3, ([('A', 'Welcome'), ('B', 'To'), ('C', 'Geeks')]))]) # note the key 3 is point to tuple not dictionary
print('First Nested Dictionary: ', dic[3][1]) 
dic = {1: 'Geeks', 2: 'For', 3: {'A': 'Welcome', 'B': 'To', 'C': 'Geeks'}} # while the key 3 is point to another dictionary

print('Second Nested Dictionary: ', dic[3]['A'])


# access dictionary values using get
print(f'access dictionary element using get method -> {dic.get(1)}')


# add element to dictionary
dic = {}
dic['Name'] = 'Ali'
dic[1] = 'Today'

print(dic)


# delete dictionary element
del dic['Name']
print(dic)