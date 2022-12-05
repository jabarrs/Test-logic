angka = [4, 2, 6, 88, 3, 11];
terkecil = angka[0];
terbesar = angka[0];

for (i = 0; i < angka.length; i++) {
  if (terbesar < angka[i]) {
    terbesar = angka[i];
  }

  if (terkecil > angka[i]) {
    terkecil = angka[i];
  }
}

console.log(terbesar, terkecil);
