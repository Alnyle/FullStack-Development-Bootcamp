

'''
A String is a data structure in Python that represents a sequence of characters.
It is an immutable data type, meaning that once you have created a string, you cannot change it.
'''


# create string
str1 = 'geeksforgeeks sudan'
print(str1)


# create string with triple quotes

str2 = '''
            this multiple line string '''
print(str2.strip())


print()
# slice string
str1 = 'Hello this a string'
print("str1 from index 1 - 4:", str1[0:4])  # Hell
str2 = str1[0:2] + str1[3:]
print("delete letter at index 2:", str2)


# del Enter string
del str2

# find 
print(str1.find('this')) # return of first occur of this 