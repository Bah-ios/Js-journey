function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;

    var years = document.getElementById("years").value
    var interest = principal * years * rate / 100;
    var amount = parseInt(principal) + parseFloat(interest);
    
    var result = document.getElementById("result")
    var year = new Date().getFullYear() + parseInt(years)

    if(principal <= 0){
        alert("Enter Positiva Number")
        
        document.getElementById("principal").focus();
    }
    else{
        var output = `
        If you deposit $${principal},
        at an interest rate of ${rate}%. 
        You will receive an amount of $${interest},
        in the year ${year}
            `
        result.innerText = output;
    }


}
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
    
}
        