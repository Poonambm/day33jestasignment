function sort_words(string){
            
    var words = string.split('');
    words = words.sort();
   words = words.join("");
   return(words);
//     console.log(words)
}
module.exports = sort_words;
// sort_words('webmaster');  