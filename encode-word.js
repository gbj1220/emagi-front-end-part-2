const emojis = require('./emojis.js');


// /* STRING BUILDING VERSION */
// // const encodeWord = function(word) {
// //     let result = '';
// //     for (const char of word) {
// //         for (const emoji of emojis) {
// //             if (emoji.letter === char.toLowerCase()) {
// //                 result += emoji.symbol;
// //             }
// //         }
// //     }
// //     return result



// /* MAP USING a SWITCHY BOI */
// const encodeWord = function (word) {
//     const chars = word.split('');
//     const symbols = chars.map((letters) => {
//         for (emoji of emojis) {
//             const emojiLetter = emoji.letter
//             switch (emojiLetter) {
//                 case letters.toLowerCase():
//                     return emoji.symbol
//                 case !letters.toLowerCase():
//                     return letters
//             }
//         }
//     }
//     )
//     return symbols.join('')
// }


// /* MAP USING IF ELSE */
const encodeWord = function (word) {
    const chars = word.split('');
    const symbols = chars.map((letters) => {
        for (emoji of emojis) {
            if (emoji.letter === letters.toLowerCase()) {
                return emoji.symbol
            }
        } if (emoji.letter !== letters.toLowerCase()) {
            return letters
        }
    })
    return symbols.join('')

}


module.exports = encodeWord;










