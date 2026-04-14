 document.getElementById('persona-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value.trim();
    const hobi = document.getElementById('hobi').value.trim();
    const angka = parseInt(document.getElementById('angka').value);

    if(!nama || !hobi || isNaN(angka)) return;

    let personaTitle = "";
    let personaDesc = "";

    switch(angka) {
        case 1:
            personaTitle = "Sang Pemimpin Alami";
            personaDesc = `Halo <strong>${nama}</strong>! Kamu memiliki jiwa kepemimpinan yang kuat. Dalam hobi <strong>${hobi}</strong>, kamu cenderung mengambil inisiatif dan memimpin arah permainan.`;
            break;

        case 2:
            personaTitle = "Si Penyeimbang Harmonis";
            personaDesc = `Hai <strong>${nama}</strong>! Kamu adalah sosok yang damai dan penuh empati. Hobi <strong>${hobi}</strong> membuatmu jadi penyeimbang dalam lingkungan sosialmu.`;
            break;

        case 3:
            personaTitle = "Ekspresif Kreatif";
            personaDesc = `Wow <strong>${nama}</strong>! Kamu penuh ide dan ekspresi. Dalam <strong>${hobi}</strong>, kamu selalu menemukan cara unik untuk menunjukkan dirimu.`;
            break;

        case 4:
            personaTitle = "Arsitek Disiplin";
            personaDesc = `Mantap <strong>${nama}</strong>! Kamu terstruktur dan fokus. Hobi <strong>${hobi}</strong> kamu jalani dengan penuh konsistensi dan ketekunan.`;
            break;

        case 5:
            personaTitle = "Petualang Bebas";
            personaDesc = `Hei <strong>${nama}</strong>! Kamu suka kebebasan dan tantangan baru. <strong>${hobi}</strong> menjadi tempatmu bereksplorasi tanpa batas.`;
            break;

        case 6:
            personaTitle = "Penjaga Kehangatan";
            personaDesc = `Halo <strong>${nama}</strong>! Kamu penuh kepedulian. Dalam <strong>${hobi}</strong>, kamu sering membawa kenyamanan bagi orang lain.`;
            break;

        case 7:
            personaTitle = "Pemikir Mendalam";
            personaDesc = `Menarik <strong>${nama}</strong>! Kamu reflektif dan suka berpikir dalam. <strong>${hobi}</strong> membantumu memahami dunia lebih dalam.`;
            break;

        case 8:
            personaTitle = "Penggerak Ambisius";
            personaDesc = `Keren <strong>${nama}</strong>! Kamu punya dorongan kuat untuk sukses. Dalam <strong>${hobi}</strong>, kamu selalu ingin mencapai level tertinggi.`;
            break;

        case 9:
            personaTitle = "Inspirator Bijaksana";
            personaDesc = `Luar biasa <strong>${nama}</strong>! Kamu membawa inspirasi bagi banyak orang. <strong>${hobi}</strong> kamu menjadi sumber motivasi bagi sekitar.`;
            break;

        case 10:
            personaTitle = "Visioner Unik";
            personaDesc = `Amazing <strong>${nama}</strong>! Kamu berbeda dan visioner. Dalam <strong>${hobi}</strong>, kamu sering melihat peluang yang tidak dilihat orang lain.`;
            break;

        default:
            personaTitle = "Misteri Tersembunyi";
            personaDesc = `Hmm <strong>${nama}</strong>, angkamu di luar nalar! Tapi satu hal yang pasti, dedikasimu pada <strong>${hobi}</strong> membuatmu unik.`;
    }

    document.getElementById('result-title').innerHTML = personaTitle;
    document.getElementById('result-desc').innerHTML = personaDesc;
    document.getElementById('result-container').classList.add('show');
});