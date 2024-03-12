import decimal 
import random
import math
# typecast 
c = 12
c = float(c)
print(c)

"""

You all must be thinking that something is wrong with Python, but it is not.
This has little to do with Python, and much more to do with how the underlying platform handles floating-point numbers.
It’s a normal case encountered when handling floating-point numbers internally in a system.
It’s a problem caused when the internal representation of floating-point numbers, which uses a fixed number of binary digits to represent a decimal number.
It is difficult to represent some decimal numbers in binary, so in many cases, it leads to small roundoff errors. 
In this case, taking 1.2 as an example, the representation of 0.2 in binary is 0.00110011001100110011001100…… and so on. It is difficult to store this infinite decimal number internally.
 Normally a float object’s value is stored in binary floating-point with a fixed precision (typically 53 bits). So we represent 1.2 internally as,

"""

a = decimal.Decimal(12.2)
b = decimal.Decimal(2.1)

x = 12.2
y = 2.1
print(a+b, " ", x+y)

# random number 
print(math.floor(random.random() * 10)) # print a random integer number between 0 and 10


# selecting a random element from list or string
s = 'geeksforgeeks'
L = [1, 2 ,3, 5, 6, 7, 7, 8, 0]
print("A random element from list L: ", random.choice(L))
print("A random element from String: ", random.choice(s))


print()
# math functions
a = 3.5
 
# returning the ceil of 3.5
print ("The ceil of 3.5 is : ", end="")
print (math.ceil(a))
 
# returning the floor of 3.5
print ("The floor of 3.5 is : ", end="")
print (math.floor(a))
 
# find the power
print ("The value of 3.5**2 is : ",end="")
print (pow(a,2))
 
# returning the log2 of 16 
print ("The value of log2 of 3.5 is : ", end="") 
print (math.log2(a)) 
 
# print the square root of 3.5 
print ("The value of sqrt of 3.5 is : ", end="") 
print(math.sqrt(a))
 
# returning the value of sine of 3.5
print ("The value of sine of 3.5 is : ", end="") 
print (math.sin(a))