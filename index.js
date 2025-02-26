import { v4 as uuidv4 } from 'uuid';
let uuid = uuidv4();
import validator from 'validator';
import * as fs from 'fs';

function generateUniqueID(firstname, lastname) {
    // checks if the firstname and lastname are strings
    if (typeof(firstname) != 'string' || typeof(lastname) != 'string') {
        return;
    }

    // concatenation of first letter of first name + lastname + 8 chars from uuid
    let newstring = firstname[0].concat(lastname);
    newstring = newstring.toLowerCase();
    uuid = uuid.slice(0,8);
    newstring = newstring.concat(uuid);

    return newstring;
}

function addAccount(information) {
    // requirements for account
    if (information.length != 4) {
        return false;
    } else if (information[0].length == 0 || information[1].length == 0 || information[2].length == 0) {
        return false;
    } else if (validator.isEmail(information[2]) == false) {
        return false;
    } else if (information[3] < 18 || typeof(information[3]) != 'number') {
        return false;
    } else {
        // unique id
        let uniqueID = generateUniqueID(information[0], information[1]);
        information.push(uniqueID);
        // creation of file
        fs.writeFile("user.txt", '', (err) => {
            if (err) throw (err);
        });
        // adding elements to file
        for (let i = 0; i < information.length; i++) {
            if (i == information.length - 1) {
                fs.appendFile("user.txt", String(information[i]) + '\n', (err) => {
                    if (err) throw err;
                });
                break;
            }
            fs.appendFile("user.txt", String(information[i]) + ',', (err) => {
                if (err) throw err;
            });
        }
        console.log(information);
    }
    return true;
}

export default { generateUniqueID, addAccount }