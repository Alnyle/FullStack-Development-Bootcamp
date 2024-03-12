import array as arr


a = arr.array('i', [1, 2, 3])

for i in range(0, 3):
    print(a[i], end=' ')
print()  

b = arr.array('d', [24.3, 2.1, 21.22])
b.insert(0, 32.1) # insert a number a index 0
b.append(11.2) # add a number a the end of the array

for i in b:
    print(i, end=' ')

print()
# get a copy of array
c = arr.array('i', a)
print("Initial Array:", end=' ')
for i in range(0, 3):
    print(i, end=', ')

print()

# get a part of the array as copy

print("sliced array elements:", end=' ')
a = [1, 2, 3, 4, 5, 6]
sliced_array = a[0:4]
for ele in sliced_array:
    print(ele, end=' ')

print()
# index function
""" 
In order to search an element in the array we use a python in-built index() method.
This function returns the index of the first occurrence of value mentioned in arguments. 
"""
a = [1, 2, 3, 4, 5, 6]
print(f"index of element 3 is: {a.index(3)}")



# reverse function and count function
a = [1, 2, 3, 4, 5, 6]
print("original array: ", *a)
a.reverse()
print("reversed array: ", *a)


print()
print()
# extend 
"""
In Python, an array is used to store multiple values or elements of the same datatype in a single
variable The extend() function is simply used to attach an item from iterable to the end of the array.
In simpler terms, this method is used to add an array of values to the end of a given or existing array.

"""

a = arr.array('i', [1, 2, 3,4,5])
print("The before array extend  : ", end =" ")
for i in range (0, 5): 
   
    print (a[i], end =" ")

a.extend([6, 7, 8, 9, 10])
print("\nThe array after extend :",end=" ")

for i in range(0, 10):
    print(a[i], end=' ')

print()