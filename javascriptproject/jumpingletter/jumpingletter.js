
/*capture the text element */
const text = document.getElementById('text');
const textvalue = text.innerText;


// convert the text into array of characters
const textarray = textvalue.split('');
console.log(textarray);

// clear the text
text.innerText = '';

// create span and loop each letter and attached into parent element

textarray.forEach((value) =>{
    const span = document.createElement('span');
    span.innerText = value;

    text.appendChild(span);
})