let width;
let length;
function calculateArea(){
    
    lengths = document.getElementById('length').value;
    width = document.getElementById('width').value;

    let area = lengths * width;
    document.getElementById('result').innerText = ` the area calculated is ${area}`;

}

