function xuly1(){
    //xác định mức giá được lựa chọn
    var muc_gia = document.querySelector('#muc_gia').value
    //chọn ra list sản phẩm theo class don_gia
    var sp = document.querySelectorAll('.don_gia')

    //reset hiển thị mỗi khi chạy hàm
    sp.forEach(function(item){
      var san_pham = item.parentElement
      san_pham.style.display = "";
    })

    //ẩn sản phẩm theo điều kiện
    if (muc_gia == 1){
        sp.forEach(function(item){
        if(item.innerHTML >= 100){
          var san_pham = item.parentElement
          san_pham.style.display = "none";
          xoa(san_pham)
        }
    })
    }
    else if (muc_gia == 2){
        sp.forEach(function(item){
        if(item.innerHTML < 100 || item.innerHTML > 200){
          var san_pham = item.parentElement
          san_pham.style.display = "none";
          xoa(san_pham)
        }
    })
    }
    else if (muc_gia == 3){
        sp.forEach(function(item){
        if(item.innerHTML < 200 || item.innerHTML > 400){
          var san_pham = item.parentElement
          san_pham.style.display = "none";
          xoa(san_pham)
        }
    })
    }
    else if (muc_gia == 4){
        sp.forEach(function(item){
        if(item.innerHTML <= 400){
          var san_pham = item.parentElement
          san_pham.style.display = "none";
          xoa(san_pham)
        }
    })
    }
}


//xử lý nhập số lượng
function xuly2(sp, soluong){
// dùng parentElement để lấy dữ liệu row
san_pham = sp.parentElement
don_gia = san_pham.querySelector('.don_gia').innerHTML
thanh_tien = san_pham.querySelector('.thanh_tien')

if (!isNaN(soluong)){
  thanh_tien.value = don_gia * soluong
  thanh_tien.innerHTML = thanh_tien.value
  console.log(thanh_tien)
  tinhtong()
}

}

function chon(box){
var box2 = box.parentElement;
var san_pham = box2.parentElement;
if (box.checked) {
  san_pham.querySelector('.so_luong').disabled = false;
} else {
  xoa(san_pham)
  san_pham.querySelector('.so_luong').disabled = true;
}
}
function xoa(san_pham){
san_pham.querySelector('.so_luong').value = 0
san_pham.querySelector('.thanh_tien').value = 0
san_pham.querySelector('.thanh_tien').innerHTML = 0
tinhtong()
}

function tinhtong(){
var tong = 0;
var tt = document.querySelectorAll('.thanh_tien')
tt.forEach(function(thanh_tien){
  if (!isNaN(thanh_tien.value)){
    tong += thanh_tien.value
}
})
document.querySelector('#tong').innerHTML = tong
}

function chon_tat_ca(a){
var boxs = document.querySelectorAll('.checkbox')
if (a.checked) {
  boxs.forEach(function(box){
    box.checked = true;
    chon(box)
  })
} else {
  boxs.forEach(function(box){
    box.checked = false;
    var box2 = box.parentElement;
    var san_pham = box2.parentElement;
    xoa(san_pham)
    san_pham.querySelector('.so_luong').disabled = true;
  })
}
}