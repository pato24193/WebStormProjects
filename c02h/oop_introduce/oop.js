let user = "dev";

// 1. Inheritance

class Xe {
    _tenXe;
    _ngaySanXuat;
    _model;
    _ngayHetHan;

    constructor(tenXe, ngaySanXuat, model, ngayHetHan) {
        this._tenXe = tenXe;
        this._ngaySanXuat = ngaySanXuat;
        this._model = model;
        this._ngayHetHan = ngayHetHan;
    }

    // rule ten ham: dongtuDanhTu
    diChuyen(paramTruyenVaoNeuCo) {
        // cac xu ly khi di chuyen
        document.writeln(this.tenXe + " dang di chuyen");
    }

    tinhTienBaoHiem() {
        document.writeln(this.tenXe + " co tien bao hiem la");
    }

    get tenXe() {
        return this._tenXe;
    }

    set tenXe(value) {
        this._tenXe = value;
    }

    get ngaySanXuat() {
        return this._ngaySanXuat;
    }

    set ngaySanXuat(value) {
        this._ngaySanXuat = value;
    }

    get model() {
        return this._model;
    }

    set model(value) {
        this._model = value;
    }

    get ngayHetHan() {
        return this._ngayHetHan;
    }

    set ngayHetHan(value) {
        this._ngayHetHan = value;
    }

}

class XeVinFast extends Xe {
    _mucXang;
    _phiXe;

    constructor(tenXe, ngaySanXuat, model, ngayHetHan, mucXang) {
        super(tenXe, ngaySanXuat, model, ngayHetHan);
        this._phiXe = 500000;
        this._mucXang = mucXang;
    }

    phanhHienDai() {
        document.writeln(this.tenXe + " co phanh hien dai");
    }

    get mucXang() {
        return this._mucXang;
    }

    set mucXang(value) {
        this._mucXang = value;
    }

    get phiXe() {
        return this._phiXe;
    }

    set phiXe(value) {
        if (user == "admin") {
            this._phiXe = value;
        } else {
            document.writeln("Khong co quyen truy cap! <br>");
        }
    }
}


// let xeVin = new XeVinFast("vf 2020", "24/03/2020",
//     "hien dai 2022", "24/03/2030", "500");
//
// document.writeln(xeVin.tenXe + " " + xeVin.mucXang);
// document.writeln("<br>");
// xeVin.diChuyen();
// xeVin.phanhHienDai();

// 2. Abstraction
// document.writeln(Math.max(2, 3, 9, 1, 100));
// let a = ["a", "z", "i", "b"];
// a.sort();
// document.writeln(a);

// 3. Encapsulation

let xeVin = new XeVinFast("vf 2020", "24/03/2020",
    "hien dai 2022", "24/03/2030", "500");

// xeVin.phiXe = 1000000;
// let tienBaoHiem = xeVin.phiXe * 0.1;
// document.writeln("<br>");
// document.writeln("Tien bao hiem: " + tienBaoHiem);
// document.writeln("<br>");
// document.writeln("Phi tien theo nam: " + xeVin.phiXe);

xeVin._mucXang = 4;
document.writeln(xeVin.mucXang);


// 4. Polymorphism

class DongVat {
    keu() {
        document.writeln("Keu...");
    }
}

class Cho extends DongVat {
    keu() {
        document.writeln("Gau gau...");
    }
}

class Meo extends DongVat {
    keu() {
        document.writeln("Meo meo...");
    }
}
