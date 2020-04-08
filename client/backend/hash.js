'use strict';
const crypto = require('crypto');

module.exports = function(password) {


        let salt = crypto.randomBytes(Math.ceil(16/2))
                .toString('hex') /** convert to hexadecimal format */
                .slice(0,16);   /** return required number of characters */
        console.log("salt",salt)
        var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
        console.log("hash",hash)
        console.log("password:",password)
        hash.read(password);
       
        console.log("hash.update:",hashedPassword)
        hashedPassword = hash.digest('hex')
        console.log("hash.update:",hashedPassword)
        var passwordData = sha512(userpassword, salt);
        console.log('UserPassword = '+userpassword);
        console.log('Passwordhash = '+passwordData.hashedPassword);
        console.log('nSalt = '+passwordData.salt);
    
    return {
        password: hashedPassword, 
        salt: salt
    };


    

   


}