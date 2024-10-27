const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

noButton.addEventListener("click", function() {
    // Mengacak posisi tombol "Tidak"
    const randomX = Math.random() * 80; // Mengacak posisi horizontal
    const randomY = Math.random() * 80; // Mengacak posisi vertikal
    noButton.style.position = "absolute";
    noButton.style.left = randomX + "%";
    noButton.style.top = randomY + "%";
});

yesButton.addEventListener("click", function() {
    // Menampilkan gambar pocong dari file lokal
    const surpriseImage = document.createElement("img");
    surpriseImage.src = "./pocong.png"; // Gambar pocong dari file lokal
    surpriseImage.alt = "Pocong Surprise!";
    surpriseImage.classList.add("pocong-image"); // Tambahkan class untuk styling
    document.body.appendChild(surpriseImage); // Menambahkan gambar ke body

    alert("Yey sekarang kita pacarann! Surprise!");
});
