
li = [12, 2, 1]

# unpack list
one, two, three = li

print(two)


# take an input and store it as list
str = input("Enter number: ")

num = str.split()
print('numbers are: ', num)


# split input using strip and split

n = int(input("Enter number from your head: "))

ls = list(map(int, input('Enter the integer\ element: ').strip().split()))[:n]

print(*ls)