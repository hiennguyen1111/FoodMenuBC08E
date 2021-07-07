
let arrMonAn = [];
//Lấy dữ liệu từ localstorage ra arrMonAn
let getDataStorage = () => {

    if(localStorage.getItem('danhSachMonAn')){

        arrMonAn = JSON.parse(localStorage.getItem('danhSachMonAn'))
    }
}

getDataStorage();


console.log('arr',arrMonAn);