function convertCurrency() {
    var amount = document.getElementById("amount").value;
    var from = document.getElementById("fromCurrency").value;
    var to = document.getElementById("toCurrency").value;
    var result = document.getElementById("result");

    if (amount === "" || amount <= 0) {
        result.innerText = "Enter a valid amount";
        return;
    }

    if (from === to) {
        result.innerText = amount + " " + from + " = " + amount + " " + to;
        return;
    }

    fetch("https://open.er-api.com/v6/latest/" + from)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var rate = data.rates[to];
            var converted = (amount * rate).toFixed(2);
            result.innerText = amount + " " + from + " = " + converted + " " + to;
        })
        .catch(function() {
            result.innerText = "Error fetching exchange rates";
        });
}
