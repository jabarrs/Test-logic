// Soal no. 1

const { count } = require('console');

int = 4;

for (i = int - 1; i >= 1; i--) {
  int *= i;
}

console.log(int);

int = 8;

for (i = int - 1; i >= 1; i--) {
  int *= i;
}

console.log(int);

// Soal no. 2

function balikkata(str) {
  let r = '';
  for (let i = str.length - 1; i >= 0; i--) {
    r += str[i];
  }
  return r;
}

console.log(balikkata('abcde'));

// Soal no.3

// Soal no. 4

a = 3;
b = 7;

a = a + b;
b = a - b;
a = a - b;

console.log(a, b);

// Soal no.5

// Soal no.6
array = [1, 4, 7, 9, 12];
low = 2;
high = 15;

// Soal no.7

// Soal no.8
int = 15;

for (i = 1; i <= int; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('EduWork');
  } else if (i % 3 == 0) {
    console.log('Edu');
  } else if (i % 5 == 0) {
    console.log('Work');
  } else {
    console.log(i);
  }
}
// Soal no.9
angka = [4, 2, 6, 88, 3, 11];
terkecil = angka[0];
terbesar = angka[0];
n = count(angka);

for (i = 0; i < angka.length; i++) {
  if (terbesar < angka[i]) {
    terbesar = angka[i];
  }

  if (terkecil > angka[i]) {
    terkecil = angka[i];
  }
}

console.log(terbesar, terkecil);
// Soal no.10

function cekTahunKabisat(tahun) {
  if ((0 == tahun % 4 && 0 != tahun % 100) || 0 == tahun % 400) {
    console.log(tahun + ' Tahun kabisat ');
  } else {
    console.log(tahun + ' Bukan Tahun kabisat');
  }
}

const tahun = prompt('masukan Tahun:');

cekTahunKabisat(tahun);
