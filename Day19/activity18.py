# Example 1
print("--- Example 1: Continuing using While Loop ---")
i = 0
while (i < 6):
    print('i = ', i)
    i += 1

# Example 2
print("--- Example 2: Check Point using While Loop ---")
number = int(input('Enter a number between 0 and 10: '))

# Create a while to ask the user to enter a new number if the previous number is not between 0 and 10
while number < 0 or number > 10:
    number = int(input('You must enter a number between 0 and 10: '))

print('Entered number = ', number)

# Example 3: Print the numbers between 12 and 30
print("--- Example 3: Nest If Statement in a While Loop ---")
y = 12
while y < 30:
    if y%2 != 0:
        print('y = ', y)
    y += 1

# Optional way to write example 3 using the continue keyword
y = 12
while y < 30:
    y += 1
    if y%2 == 0:
        continue
    print('again  = ', y)

# Example 4: Else Statement in a while loop
print('--- Example 4: Else statement in a while loop ---')
m = 10
while m > 0:
    print('m = ', m)
    m -= 1
else:
    print('Happy New Year!')

# Example 5
print('--- Example 5: While Loop ---')
number1 = int(input('Enter number 1 = '))
number2 = int(input('Enter number 2 = '))
add = number1 + number2

while add <= 30:
    number1 += 1
    number2 += 2
    add = number1 + number2
    if add > 30:
        break
    print('Number 1 = ', number1, 'Number 2 = ', number2 , ', Sum = ', add)
    
print('OUTSIDE: Number 1 = ', number1, 'Number 2 = ', number2 , ', Sum = ', add)


# Example 6
print('--- Example 6: Math Built-in Function ---')
import math
radius = int(input('Enter a radius: '))
area = math.pow(radius, 2)*math.pi
area = round(area,2)
print('The area with radius %s is %s ' %(radius, area))

# Example 7
def example7():
    print('--- Example 7 ---')
    print('Define function')

example7()

# Example 8
def example8(name):
    print('--- example 8 ---')
    print(name)

example8(23)

# Example 9
def example9(num1, num2):
    total = num1 + num2
    return total

n1 = int(input('Enter num1 = '))
n2 = int(input('Enter num2 = '))
ex9_result = example9(n1, n2)
print('The sum of %s and %s is %s ' %(n1, n2, ex9_result))


# Example 10
def is_divisible(x,y):
    print('--- Example 10 ---')
    if x%y == 0:
        return True
    else:
        return False

print('is %s and %s divisible? %s' %(n1, n2, is_divisible(n1,n2)))
