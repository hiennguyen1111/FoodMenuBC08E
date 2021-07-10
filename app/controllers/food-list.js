import { Menu } from "../models/Menu.js";
import { MonAn } from "../models/MonAn.js";

// let arrMonAn = [];

let menu = new Menu();
menu.layStorage();
menu.renderMenu('tbodyFood');



window.xoaMonAn = function (maMon) {
    
    menu.xoaMonAn(maMon);
    menu.renderMenu('tbodyFood');
    menu.luuStorage();
}


window.chinhSua = function (maMon) {
    //Trong hàm này xử lý load thông tin món ăn có mã này lên giao diện
    let monAn = menu.layThongTinMonAn(maMon);

    // document.querySelector('#maMon').value = monAn.maMon;
    // document.querySelector('#tenMon').value = monAn.tenMon;



    if(monAn) {
        //Load dữ liệu lên các input của popup modal
        console.log('monAn',monAn)
        //{maMon:1,tenMon:'Cơm chiên', giaMon:'',...}

        //Sau khi dom trả về các taginput được ảnh hưởng bởi selector này
        let arrInput = document.querySelectorAll('#foodForm input,#foodForm select, #foodForm textarea');

        for(let input of arrInput) {
            //{id,className,name,value} = input;
            let name = input.getAttribute('name');
            input.value = monAn[name]; 
        }

    }
}

document.querySelector('#btnCapNhat').onclick =  () => {

    let monAnCapNhat = new MonAn();

    // monAnCapNhat.maMon = document.querySelector('#maMon').value;
    let arrInput = document.querySelectorAll('#foodForm input,#foodForm select, #foodForm textarea');
    for(let input of arrInput) {
        let name = input.getAttribute('name');
        let value = input.value;

        monAnCapNhat[name] = value;
    }

    menu.capNhatMonAn(monAnCapNhat.maMon,monAnCapNhat);

    menu.renderMenu('tbodyFood');
    //Tắt popup
    document.querySelector('.btn-secondary').click();
    menu.luuStorage();

}



// Object.thuocTinh
// object[thuocTinh]