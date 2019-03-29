function hienThiSNT() {
    var number = parseInt(prompt("Nhap vao so luong so nguyen to can hien thi"));
    var count = 0;
    var i = 1;
    while (count < number) {
        if (kiemTraSNT(i)) {
            document.write(i+'<br>');
            count++;
        }
        i++;
    }
}

hienThiSNT();

function kiemTraSNT(n) {
    if (n == 1) return true;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }

    return true;
}
