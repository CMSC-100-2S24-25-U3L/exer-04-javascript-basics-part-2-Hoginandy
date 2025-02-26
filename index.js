import { v4 as uuidv4 } from 'uuid';
let uuid = uuidv4();

function generateUniqueID(firstname, lastname) {
    
    if (typeof(firstname) != 'string' || typeof(lastname) != 'string') {
        return;
    }

    let newstring = firstname[0].concat(lastname);
    newstring = newstring.toLowerCase();
    uuid = uuid.slice(0,8);
    newstring = newstring.concat(uuid);

    return newstring;
}

console.log(generateUniqueID("Alan", "Turing"));