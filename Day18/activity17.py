"""
Melson Heo
Tuesday, Jan 31
Activity 17: Conditional Statements and Loops
"""

# Example 1
print('--- Example 1: if and else statement ---')
age = int(input('Enter age: '))
if age >= 21:
    print('Adult')
else:
    print('Under age!')
print('Age Checkpoint!')

# Example 2
print('--- Example 2: if, elif, and else statement using and operator ---')
grade= int(input('Enter grade: '))
if grade >= 90 and grade <= 100:
    print('GPA = A')
elif grade >= 80 and grade < 90:
    print('GPA = B')
elif grade >= 70 and grade < 80:
    print('GPA = C')
elif grade >= 60 and grade < 70:
    print('GPA = D')
elif grade >= 0 and grade < 60:
    print('GPA = F')
else:
    print('INVALID!')
    
# Example 3
print('--- Example 3: if, elif, and else statement using or operator ---')
kidAge = int(input('Enter an age between 5 and 10: '))
if kidAge == 5 or kidAge == 6:
    print('Eat pasta!')
elif kidAge == 7 or kidAge == 8:
    print('Eat fish and veggies')
elif kidAge == 9 or kidAge == 10:
    print('Eat ice cream')
else:
    print('Wrong age')

# Example 4
print('--- Example 4: For Loop ---')
for x in range(0, 5):
    print('Counting', x)

# Example 5
print('--- Example 5: For Loop in a list ---')
animals = ['fish', 'dog', 'cat', 'bear', 'pig']
for i in animals:
    print(i)

# Example 6
print('--- Example 6: For Loop with Different Increment of Decrement ---')
for m in range(3,30,2):
    if m == 17:
        break
    print('m = ', m)
# Decreasing Order
for n in range(10,0,-1):
    print('n = ', n)
