function submitForm(event) {
    event.preventDefault();

    let nama = document.getElementById("nama").value;
    let tgl = document.getElementById("tgl").value;
    let pesan = document.getElementById("pesan").value;
    let jk = document.querySelector("input[name='jk']:checked").value;

    let time = new Date().toLocaleString();

    document.getElementById("currentTime").textContent = time;
    document.getElementById("outNama").textContent = nama;
    document.getElementById("outTgl").textContent = tgl;
    document.getElementById("outJk").textContent = jk;
    document.getElementById("outPesan").textContent = pesan;
}
