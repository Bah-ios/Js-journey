let count = 0;
function increaseCount(){
    count++;
    document.getElementById('countDisplay').innerHTML =count;
    if (count === 10){
        alert(`Congratulations you reached ${count} followers`)
    }
}

