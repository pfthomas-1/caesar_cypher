let encryptForm = document.getElementById("encryptForm");
let reset = document.getElementById("reset");
let output = document.getElementById("output");

let counter = 0; // Variable use to make the console easier to look through

encryptForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    counter++;

    console.log(`Iteration ${counter}`);

    let message = document.getElementById("message").value;
    let position = document.getElementById("position").value;
    let direction = document.getElementById("direction").value;
    let mode = document.getElementById("mode").value;

    console.log(`message: ${message}\nposition: ${position}\ndirection: ${direction}\nmode: ${mode}`); // for debugging if necessary

    if (message) {
        output.textContent = encrypt(message, position, direction, mode);
    } else {
        window.alert("Please enter a message and try again");
    }
});

function encrypt(msg, pos, dir, mode) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; // Array to store the alphabet
    let cypherbet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; // Alphabet array that gets cycled arround and compared to the alphabet array
    
    let outputmsg = ""; // empty string variable to store output, will be returned

    if (dir === "left" && mode === "encrypt") { // if direction is left and mode is encrypt
        console.log(`cycle ${pos} space(s) to the left`);
        cypherbet.cycleLeft(pos); // ...then cycle cypherbet pos spaces to the left
    } else if (dir === "left" && mode === "decrypt") {// if direction is left and mode is decrypt
        console.log(`cycle ${pos} space(s) to the right`);
        cypherbet.cycleRight(pos); // ...then cycle cypherbet pos spaces to the right
    } else if (dir === "right" && mode === "encrypt") { // if direction is right and mode is encrypt
        console.log(`cycle ${pos} space(s) to the right`);
        cypherbet.cycleRight(pos); // ...then cycle cypherbet pos spaces to the right
    } else if (dir === "right" && mode === "decrypt") { // if direction is right and mode is decrypt
        console.log(`cycle ${pos} space(s) to the left`);
        cypherbet.cycleLeft(pos); // ...then cycle cypherbet pos spaces to the left
    }

    // make capitalized versions of the alphabet and cypherbet arrays so the program can process both uppercase and lowercase letters
    let alphabetCap = alphabet.map(capitalize);
    let cypherbetCap = cypherbet.map(capitalize);

    // for error checking
    let alphaStr = alphabet.toString();
    let cypherStr = cypherbet.toString();
    let alphaStrCap = alphabetCap.toString();
    let cypherStrCap = cypherbetCap.toString();

    console.log(`alphaStr: ${alphaStr}`);
    console.log(`cypherStr: ${cypherStr}`);
    console.log(`alphaStrCap: ${alphaStrCap}`);
    console.log(`cypherStrCap: ${cypherStrCap}`);

    for (let char=0; char<msg.length; char++) { // iterate through input message
        let alphapos = alphabet.indexOf(msg[char]); // get the index of msg[char] in the alphabet arrary, returns -1 if it is absent from the array
        let alphaposCap = alphabetCap.indexOf(msg[char]); // like the previous line, but for capital letters

        if (alphapos == -1 && alphaposCap == -1) { // if msg[char] is not in alphabet or alphabetCap
            console.log(`Character ${char+1} of the message (${msg[char]}) is not in the alphabet, appending to output`);
            outputmsg += msg[char]; // ...then add it to outputmsg
        } else if (alphapos != -1) { // if msg[char] is in alphabet
            console.log(`Character ${char+1} of the message (${msg[char]}) is at index ${alphapos} of alphabet, which equates to ${cypherbet[alphapos]}`);
            outputmsg += cypherbet[alphapos]; // ...then add the element of cypherbet at index alphapos to outputmsg
        } else if (alphaposCap != -1) { // if msg[char] is in alphabetCap
            console.log(`Character ${char+1} of the message (${msg[char]}) is at index ${alphaposCap} of alphabetCap, which equates to ${cypherbetCap[alphaposCap]}`);
            outputmsg += cypherbetCap[alphaposCap]; // ...then add the element of cypherbetCap at index alphaposCap to outputmsg
        }
    }

    console.log(`Output: ${outputmsg}`);

    return outputmsg;
}

reset.addEventListener("click", function() {
    output.textContent = "";
});

function capitalize(value, index, array){ // For use with Array.map() to make capitalized versions of the alphabet and cypherbet arrays
    return value.toUpperCase(); 
}

Array.prototype.cycleLeft = function(spaces) { // Method to cycle the elements of an array to the left
    for (i=0; i<spaces; i++) { // loop up to spaces
        let temp = this.shift(); // remove the first element...
        this.push(temp); // ...and place it at the end of the array
    }
}

Array.prototype.cycleRight = function(spaces) { // Method to cycle the elements of an array to the right
    for (i=0; i<spaces; i++) { // loop up to spaces
        let temp = this.pop(); // remove the last element...
        this.unshift(temp); // ...and place it at the start of the array
    }
}