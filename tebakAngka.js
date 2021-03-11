let tanya = true;
for (let nyawa = 3; nyawa >= 1 || tanya; nyawa--) {
    // Input player
    let p = prompt(`Sisa nyawa kamu adalah ${nyawa} \nTebak angka\nMasukkan angka tebakan mu:`);

    // random number
    let comp = Math.floor(Math.random() * 10) + 1;

    let hasil = "";
    // rule
    if (p == comp) {
        hasil = "benar";
    } else {
        hasil = "salah";
    }

    // result
    alert(`Angka yang kamu masukkan: ${p}, dan angka yang ditebak adalah: ${comp}. Jawaban kamu ${hasil}`)

    // Jika tebakan benar, maka game/loop akan berhenti
    if (hasil == "benar") {
        break;
    }

    // Jika tebakan salah, maka game/loop akan berjalan dan mengurangi 1 nyawa/kesempatan di setiap tebakan
    if (nyawa <= 1) {
        tanya = confirm("kesempatan kamu sudah habis, mau coba lagi?");
        if (tanya) {
            nyawa += 3;
        }
    }
}

alert("terimakasih sudah bermain")