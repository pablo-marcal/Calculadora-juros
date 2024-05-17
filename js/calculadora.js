function calc(){
    const capital = document.getElementById("inicial").value;
    const juros = document.getElementById("am").value / 100;
    const tempo = document.getElementById("rendi").value;

    const total = capital * (1 + juros)**tempo;

    document.getElementById("total").innerHTML = "R$ " + total.toFixed(2).replace('.', ',');
}