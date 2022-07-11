/** bài 1
 * khối 1: input
 * luong1Ngay 
 * soNgayLam
 * tienLuong
 * 
 * Khối 2: các bước xử lý
 * B1: tìm thẻ html và lấy giá trị
 * B2: xây dựng công thức tính tiền lương
 * tienLuong = soNgayLam * luong1Ngay;
 * B3: hiện thị lên UI
 * 
 * Khối 3: output
 * tienLuong
 */

function calcSalary(){
    var soNgayLam = document.getElementById("inputSoNgayLam").value;
    // console.log(soNgayLam);
    var luong1Ngay = document.getElementById("inputLuongMotNgay");
    var tienLuong = soNgayLam * luong1Ngay;
    // console.log(tienLuong);

    document.getElementById("txtTienLuong").innerHTML = "Tiền lương:" + tienLuong + ".000VND";
}
document.getElementById("btnTienLuong").onclick = calcSalary;

/** bài 2
 * khối 1: input
 * 5 số thực
 * 
 * Khối 2: các bước xử lý
 * B1: tìm thẻ html và lấy giá trị
 * B2: xây dựng công thức tính tiền lương
 * giaTriTrungBinh = (num1+num2+num3+num4+num5)/5
 * B3: hiện thị lên UI
 * 
 * Khối 3: output
 * giaTriTrungBinh
 */

 function calcGTTB(){
    var num1 = document.getElementById("soThuc1").value;
    var num2 = document.getElementById("soThuc2").value;
    var num3 = document.getElementById("soThuc3").value;
    var num4 = document.getElementById("soThuc4").value;
    var num5 = document.getElementById("soThuc5").value;

    // console.log(num1,num2,num3,num4,num5);
    var giaTriTrungBinh = (parseInt(num1)+parseInt(num2)+parseInt(num3)+parseInt(num4)+parseInt(num5))/5;
    
    document.getElementById("txtGTTB").innerHTML = "Giá trị trung bình:" + giaTriTrungBinh;
}
document.getElementById("btnGTTB").onclick = calcGTTB;

/** bài 3
 * khối 1: input
 * giaUSD
 * soUSD
 * 
 * Khối 2: các bước xử lý
 * B1: tìm thẻ html và lấy giá trị
 * B2: xây dựng công thức tính tiền lương
 * tienQuyDoi = giaUSD * soUSD;
 * B3: hiện thị lên UI
 * 
 * Khối 3: output
 * tienQuyDoi
 */

 function calcDoiTien(){
    var soUSD = document.getElementById("tienUSD").value;
    var giaUSD = 23.500;
    var quyDoi = soUSD * giaUSD;
    var tienQuyDoi = quyDoi.toFixed(3)
    
    document.getElementById("txtDoiTien").innerHTML = "Số tiền sau khi đổi:" + tienQuyDoi + "VND" ;
}
document.getElementById("btnDoiTien").onclick = calcDoiTien;

/** bài 4
 * khối 1: input
 * chieuRong
 * chieuDai
 * 
 * Khối 2: các bước xử lý
 * B1: tìm thẻ html và lấy giá trị
 * B2: xây dựng công thức tính chu vi
 * chuVi = (chieuDai + chieuRong) * 2;
 * B3: xây dựng công thức tính diện tích HCN
 * dienTich = chieuDai * chieuRong;
 * B4: hiện thị lên UI
 * 
 * Khối 3: output
 * dienTich
 * chuVi
 */

 function calcHCN(){
    var chieuDai = document.getElementById("chieuDaiHCN").value;
    var chieuRong = document.getElementById("chieuRongHCN").value;
    var dienTich = chieuDai * chieuRong;
    var chuVi = (parseInt(chieuDai) + parseInt(chieuRong)) * 2;
    
    document.getElementById("txtHCN").innerHTML ="Diện tích HCN:" + dienTich + "<br> Chu vi HCN:" + chuVi;
}
document.getElementById("btnHCN").onclick = calcHCN;

/** bài 5
 * khối 1: input
 * num (số có 2 chữ số)
 * sum (tổng 2 ký số)
 * unit(số hàng đơn vị)
 * ten(số hàng chục)
 * 
 * Khối 2: các bước xử lý
 * B1: tìm thẻ html và lấy giá trị
 * B2: lấy chữ số hàng chục
 * ten = Math.floor(num/10);
 * B3: lấy chữ số hàng đơn vị
 * unit = num % 10;
 * B4: hiện thị lên UI
 * 
 * Khối 3: output
 * sum
 */

 function calcNum(){
    var num = document.getElementById("inputNum").value;
    var ten = Math.floor(num/10);
    var unit = num%10;
    var sum = ten + unit;
    
    document.getElementById("txtNum").innerHTML = "Tổng 2 ký số:" + sum;
}
document.getElementById("btnNum").onclick = calcNum;