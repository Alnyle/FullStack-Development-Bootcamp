
# set order set of element and unique 
my_set = {"January", "February", "March"}
my_set.add("April")

my_set.remove("January");

for element in my_set:
    print(element);


# list like array but can different data type in the same 

myList = ["January", "February", "March"]
for i in myList:
    print(f"this month is: {i}")


x = "Hello World" 
print(x)
x = 50
print(x)
x = 60.5
print(x)
x = 3j
print(x)
x = ["geeks", "for", "geeks"] 
print(x)
x = ("geeks", "for", "geeks") 
print(type(x))
x = range(10)  
x = {"name": "Suraj", "age": 24} 
print(type(x))
x = {"geeks", "for", "geeks"} 
x = frozenset({"geeks", "for", "geeks"}) 
print(type(print(x)))
x = True
x = b"Geeks"
x = bytearray(4) 
print(x)
x = memoryview(bytes(6)) 
x = None