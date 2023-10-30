var dssp =[];

function themSP(){
    var _ma = document.getElementById('txtMaSP').value;
    var _ten = document.getElementById('txtTenSP').value;
    var _gia = document.getElementById('txtGiaSP').value;
    var _moTa = document.getElementById('txtMoTaSP').value;
    var sp = new product(_ma, _ten, _gia, _moTa);

    dssp.push(sp);
    rennderDssp(dssp);
}