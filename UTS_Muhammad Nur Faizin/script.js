function hitungDiskon(subtotal) {
    let diskon = 0;

    if (subtotal < 50000) {
        diskon = 0;
    } else if (subtotal <= 99999) {
        diskon = 5;
    } else {
        diskon = 10;
    }

    return diskon;
}

function hitungBelanja() {
    const nama = document.getElementById('namaPembeli').value.trim();
    const harga = Number(document.getElementById('hargaSatuan').value);
    const jumlah = Number(document.getElementById('jumlahBarang').value);
    const status = document.getElementById('statusPembeli').value;

    const hasilEl = document.getElementById('hasilBelanja');
    const simulasiEl = document.getElementById('simulasiHarga');

    if (nama === '' || harga <= 0 || jumlah <= 0) {
        hasilEl.className = 'hasil-error';
        hasilEl.textContent = 'Lengkapi dulu mas datanya';
        simulasiEl.innerHTML = '';
        return;
    }

    const subtotal = harga * jumlah;
    let persenDiskon = hitungDiskon(subtotal);

    if (status === 'Member') {
        persenDiskon += 5;
    }

    const nominalDiskon = (subtotal * persenDiskon) / 100;
    const totalBayar = subtotal - nominalDiskon;

    hasilEl.className = 'hasil-box';
    hasilEl.innerHTML = `
        Nama Pembeli: ${nama} (${status})<br>
        Subtotal Rp${subtotal}, diskon ${persenDiskon}% (Rp${nominalDiskon}), total bayar Rp${totalBayar}
    `;

    let daftarSimulasi = [];
    for (let i = 1; i <= 5; i++) {
        const totalSimulasi = harga * i;
        daftarSimulasi.push(`${i} buah = Rp${totalSimulasi}`);
    }

    simulasiEl.innerHTML = `<strong>Simulasi untuk harga satuan Rp${harga}:</strong> ${daftarSimulasi.join(', ')}.`;
}