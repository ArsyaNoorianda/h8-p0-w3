var arr = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(x){
 
  x.splice(1 , 1, "Roman Alamsyah Elsharawy" );
  x.splice(2 , 1, "Provinsi Bandar Lampung" );
  x.splice(4, 1, "Pria", "SMA International Metro");

  
  var convertTanggal = x[3].split('/');
  var tglToNum = convertTanggal.map(Number);
  var bulan = '';
  var joinTanggal = convertTanggal.join('-');
  var sliceNama = x[1].slice(0, 15);

  
  switch (tglToNum[1]) {
    case 1:
      bulan = 'Januari';
      break;
    case 2:
      bulan = 'Februari';
      break;
    case 3:
      bulan = 'Maret';
      break;
    case 4:
      bulan = 'April';
      break;
    case 5:
      bulan = 'Mei';
      break;
    case 6:
      bulan = 'Juni';
      break;
    case 7:
      bulan = 'Juli';
      break;
    case 8:
      bulan = 'Agustus';
      break;
    case 9:
      bulan = 'September';
      break;
    case 10:
      bulan = 'Oktober';
      break;
    case 11:
      bulan = 'November';
      break;
    case 12:
      bulan = 'Desember';
      break;
    default:
      bulan = 'Bulan hanya sampai 12!';
  }

  console.log(x);
  console.log(bulan);
  console.log(tglToNum.sort(function(v1,v2) {return v1 < v2}));
  console.log(joinTanggal);
  console.log(sliceNama);
  return '!!!!!!';
}

console.log(dataHandling2(arr));


/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */