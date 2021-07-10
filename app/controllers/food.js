import { Menu } from "../models/Menu.js";
import { MonAn } from "../models/MonAn.js"

let menu = new Menu;
//Lấy dữ liệu từ localstorage
menu.layStorage();
//Định nghĩa sự kiện cho nút btnThemMon
document.querySelector('#btnThemMon').onclick = () => {
    //Tạo đối tượng chứa thông tin người dùng nhập từ giao diện
    let monAn = new MonAn();
    //Truy xuất đến tất cả các input,select, textarea để lấy thông tin người dùng nhập từ giao diện
    let arrTagInput = document.querySelectorAll('form input,form select, form textarea');
    for (let input of arrTagInput) {
        //Mỗi lần duyệt 1 taginput lấy ra name và value
        let { name, value } = input;
        //Gán giá trị value dựa vào name(thuộc tính) cho object món ăn
        monAn[name] = value;
        //console.log(name,value);
    }
    console.log('arrTagInput', arrTagInput);
    console.log('monAn', monAn);
    //Cách 2: Dùng oop
    document.querySelector('.noiDungHienThi').innerHTML = monAn.hienThiThongTin();


    //Them mon an
    // menu.arrMonAn.push(monAn);
    menu.themMonAn(monAn);
    menu.luuStorage();
   // localStorage.setItem('danhSachMonAn', JSON.stringify(arrMonAn));

}

// let sinhVien = {ma:1,ten:'A'};
// sinhVien.ten='B';
// sinhVien['ten'] = 'B'; ok
// sinhVien = {...sinhVien,ten:'B'}
// sinhVien = {...sinhVien,['ten']:'B'}ok


// arrMonAn = [];
// monAn = {}