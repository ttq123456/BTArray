var numArray = [];
function taoMang(){
    var n = Number(document.querySelector("#num").value);
    numArray.push(n);
    //console.log(numArray);
    document.querySelector("#txtKq0").innerHTML=numArray;
}

document.querySelector("#btnAdd").onclick = taoMang;

function tinhTongDuong(){
    var tong = 0;
    for (var i=0; i<numArray.length; i++){
        if (numArray[i] > 0) {
            tong += numArray[i];
        }
    }
    document.querySelector("#txtKq1").innerHTML = "Tổng các số dương trong mảng: " + tong;
} 

document.querySelector("#btnTinh1").onclick = tinhTongDuong;


function demSoDuong(){
    var dem = 0;
    for (var i=0; i<numArray.length; i++){
        if (numArray[i] > 0) {
            dem++;
        }
    }
    document.querySelector("#txtKq2").innerHTML = "Số các số dương trong mảng: " + dem;
} 

document.querySelector("#btnTinh2").onclick = demSoDuong;

function soNhoNhat(){
    var min = numArray[0];
    for (var i=1; i<numArray.length; i++){
        if (numArray[i] < min) {
            min = numArray[i];
        }
    }
    document.querySelector("#txtKq3").innerHTML = "Số nhỏ nhất trong mảng: " + min;
}

document.querySelector("#btnTinh3").onclick = soNhoNhat;

function soDuongNN(){
    var min = 0;
    for (var i=0; i<numArray.length; i++){
        if (numArray[i] > 0) {
            min = numArray[i];
            break;
        }
    }

    for (var i=0; i<numArray.length; i++){
        if (numArray[i] > 0 && numArray[i] < min) {
            min = numArray[i];
        }
    }
    if (min > 0){
        document.querySelector("#txtKq4").innerHTML = "Số dương nhỏ nhất trong mảng: " + min; 
    }
    else {
        document.querySelector("#txtKq4").innerHTML = "Mảng không có số dương"; 
    }
}

document.querySelector("#btnTinh4").onclick = soDuongNN;

function soChanLast(){
    var chan = -1;
    for (var i=0; i<numArray.length; i++){
        if (numArray[i] % 2 == 0) {
            chan = numArray[i];
        }
    }

    document.querySelector("#txtKq5").innerHTML = chan;
    
}

document.querySelector("#btnTinh5").onclick = soChanLast;

function doiCho(){
    var viTri1 = Number(document.querySelector("#vt1").value);
    var viTri2 = Number(document.querySelector("#vt2").value);
    var tg = numArray[viTri1];
    numArray[viTri1] = numArray[viTri2];
    numArray[viTri2] = tg;

    console.log(numArray);
    document.querySelector("#txtKq6").innerHTML = numArray;
}

document.querySelector("#btnTinh6").onclick = doiCho;

function sapXep(){
    for (var i=0; i<numArray.length-1; i++)
        for (var j=0; j<numArray.length-i;j++){
            if (numArray[j] > numArray[j+1]){
                var tg = numArray[j];
                numArray[j] = numArray[j+1];
                numArray[j+1] = tg;
            }
        }

    document.querySelector("#txtKq7").innerHTML = numArray;
}

document.querySelector("#btnTinh7").onclick = sapXep;

function kiemTraSoNguyenTo(n){
    if (n < 0) return false;
    if (n == 1 || n == 0) return false;
    var m = Math.floor(n/2);
    //console.log("m=",m);
    for (i=2; i <= m; i++){
        if (n % i == 0) {
           return false;
        }
    }
    return true;
}

function timSoNT(){
    for (var i=0; i < numArray.length; i++){
        if (kiemTraSoNguyenTo(numArray[i])) {
            document.getElementById("txtKq8").innerHTML = numArray[i];
            return;
        }
    }
    document.getElementById("txtKq8").innerHTML = "Mảng không có số nguyên tố";
}
 var numArray1 = [];
 function taoMangThuc(){
    var n = Number(document.querySelector("#numFloat").value);
    numArray1.push(n);
    console.log(numArray1);
    document.querySelector("#txtThuc").innerHTML = numArray1;
}


function demSoNguyen(){
    var dem = 0;
    for (var i=0; i< numArray1.length;i++){
        if(Number.isInteger(numArray1[i])){
            dem++;
        }
    }
    document.getElementById("txtKq9").innerHTML = dem;
}

function demSoAmDuong(){
    var countAm = 0;
    var countDuong=0;
    var txt = "";
    for (var i=0; i<numArray.length; i++){
        if (numArray[i] < 0) countAm++;
        else if (numArray[i] > 0) countDuong++;
    }

    if (countDuong > countAm) {
        txt= "Số dương nhiều hơn số âm";
    } else if (countDuong < countAm) {
       txt= "Số âm nhiều hơn số dương";
    }
    else txt= "Số dương và số âm bằng nhau";

    document.getElementById("txtKq10").innerHTML = txt;
}