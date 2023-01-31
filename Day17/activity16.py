""" 
Melson Heo
Day 17 - Intro to Python
Monday Jan 30
"""
# Example using the print() function
print('Melson Heo')
print('--- Example 1 ---')
name = 'Peter Pan'
number = 2.5

print('My name is ', name, ' and my lucky number is: ', number)

# Example using input() function
print('--- Example 2 ---')
lastName = input('Enter a last name: ')
num1 = int(input('Enter a number: '))
print('Last name = ', lastName, ' Enter number = ', num1, 'The double of the number is ', num1 * 2)

print('--- Example 3 ---')
h = float(input('Enter a height: '))
w = float(input('Enter a weight: '))
hyp = (h**2 + w**2)**0.5
print('Hypotenouse = ', hyp)
print('--- Class Activity ---')
"""
Find the area, circumference, and volume of a circle based on the user input
"""
radius = float(input('Please enter a radius: '))
height = float(input('Please enter a height: '))
area = 3.1416*radius*2
print('Area = ', area)
print('Circumference = ', 2*3.1416*radius)
print('Volume = ', area*height)

print('--- Example 4 ---')
# Assign a value
number1 = 8
# Self add +=
number1 += 3
print('Self add = ', number1)
# Self Subtraction -=
number1 -= 5
print('Self subtract = ', number1)
# Self mod
number1 %= 4
print('Remainder after the division with 4 = ', number1)

print('--- Example 5 ---')
# Find a character in a string using index
msg = 'Queensborough'
# Print the 3rd and 7th character in string msg
print('The 3rd character is = ', msg[2])
print('The 7th character is = ', msg[6])
# Slice in a string
print('From the 5th to the 10th character: ', msg[4:5])
lenMsg = len(msg)
print('The length is = ', lenMsg)
# upper() method
msgUpper = msg.upper()
print(msgUpper)
# replace() method
msgReplace = msg.replace('e', '$')
print(msgReplace)
# in operator
msgIn = 'n' in msg
print('Is m in the message?', msgIn)

print('--- Example 6: List ---')
# Create list of animals
animals = ['cat','dog','parrot','fish','rat']
print('2nd animal = ', animals[1])
# Delete the 3rd item in the list
del animals[2]
print(animals)
