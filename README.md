# caesar_cypher
Name: Philip Thomas
Class: WEB-115
Section #: 2801

The Caesar Cypher program requires the user to complete 4 fields:
  1. Message (the message to be encrypted/decrypted)
  2. Spaces (the number of spaces to shift the letters in the message, minimum of 1, defaults to 1)
  3. Direction (the direction the letters will be shifted, defaults to left)
  4. Mode (whether the program should encrypt or decrypt the message, defaults to encrypt)

When the user clicks the submit button, the program will iterate through the inputted message and shift all letters (uppercase and lowercase) according to the values of the other 3 fields and display the output below the horizontal line. Non-alphabetical characters are not shifted.
If the user clicks the submit button while the message field is empty, the program will display an alert requesting the user to enter a message into the empty field and try again.

The reset button will clear the 4 fields, resetting them to their default values, if any, and erase the output if one is present.
