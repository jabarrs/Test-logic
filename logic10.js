function cekTahunKabisat(tahun) {
  if ((0 == tahun % 4 && 0 != tahun % 100) || 0 == tahun % 400) {
    console.log(tahun + ' Tahun kabisat ');
  } else {
    console.log(tahun + ' Bukan Tahun kabisat');
  }
}

const tahun = prompt('masukan Tahun:');

cekTahunKabisat(tahun);
