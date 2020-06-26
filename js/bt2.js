function kiem_tra(){
    var kt;
    var ms_sv = document.querySelector('#ms_sv');
    if (ms_sv.value.length == 0){
        ms_sv.style.backgroundColor = "yellow";
        ms_sv.placeholder = 'Vui lòng không bỏ trống Mã số sinh viên!'
        alert('Vui lòng không bỏ trống Mã số sinh viên!')
        kt = 0;
    }

    var ten_sv = document.querySelector('#ten_sv');
    if (ten_sv.value.length == 0){
        ten_sv.style.backgroundColor = "yellow";
        ten_sv.placeholder = 'Vui lòng không bỏ trống Tên sinh viên!'
        alert('Vui lòng không bỏ trống Tên sinh viên!')
        kt = 0;
    }

    var email_sv = document.querySelector('#email_sv');
    if (email_sv.value.length == 0){
        email_sv.style.backgroundColor = "yellow";
        email_sv.placeholder = 'Vui lòng không bỏ trống Email! '
        alert('Vui lòng không bỏ trống Email!')
        kt = 0;
    }
    //Hàm kiểm tra radio
    var radio = document.querySelectorAll('[name="GT"]');
    var ischecked = false;
    radio.forEach(function(a){
        if (a.checked){
            ischecked = true;
        }
    })
    if (ischecked == false){
        document.querySelector('#gioi_tinh').style.backgroundColor = "yellow";
        alert('Vui lòng chọn giới tính!')
        kt = 0
    };
    //Hàm kiểm tra checkbox
    //Tìm kiếm element dựa trên name của input
    //do có nhiều lựa chọn nên dùng hàm forEach để check từng lựa chọn.
    var checkbox = document.querySelectorAll('[name="ST"]');
    var ischecked = false;
    checkbox.forEach(function(a){
        if (a.checked){
            ischecked = true;
        }
    })
    if (ischecked == false){
        document.querySelector('#so_thich').style.backgroundColor = "yellow";
        alert('Vui lòng chọn sở thích!')
        kt = 0
    };
    //Hàm kiểm tra choose
    //Tìm kiếm element dựa trên name của input
    var choose = document.querySelector('#choose');
    if (choose.value == ""){
        choose.style.backgroundColor = "yellow";
        alert('Vui lòng chọn Quốc tịch!')
        kt = 0
    };
    
    //Hàm kiểm tra ghi chú
    //Tìm kiếm element dựa trên id
    var ghi_chu = document.querySelector('#ghi_chu');
    if (ghi_chu.value.length >= 200){
        ghi_chu.style.backgroundColor = "yellow";
        alert('Ghi chú phải ít hơn 200 ký tự!')
        kt = 0
    };

    if (kt == 0){
        alert("Đăng ký thất bại!!")
    }
    else{
        alert("Đăng ký thành công!!")
    }

}

//Hàm hoàn tác màu cho thanh đã nhập, thanh nhập liệu sẽ dùng event onkeyup.
//thanh lưa chọn, check, radio sẽ dùng event onchange
function changeColor(a){
        a.style.backgroundColor = "";
    }
