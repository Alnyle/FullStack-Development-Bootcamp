

# is Operator

"""

The is keyword is used to test whether two variables belong to the same object. The test will return
 True if the two objects are the same else it will return False even if the two objects are 100% equal.

Python is Operator
The code first assigns the value 10 to variables x and y.
 It then compares x and y using the “is” operator and prints True because they refer to the same object.
 Next, it assigns two separate lists to x and y.
 It then compares x and y using the “is” operator and prints False because the lists are different objects in memory. 

"""

x = 20
y = 20
if x is y:
    print(True)
else:
    print(False)


x = ["a", "b", "c", "d"]
y = ["a", "b", "c", "d"]
print("array X is Array Y: ", x is y)

# Create a list
animals = ["dog", "lion", "cat"]

# Check if lion in list or not
if "cat" in animals:
    print(True)