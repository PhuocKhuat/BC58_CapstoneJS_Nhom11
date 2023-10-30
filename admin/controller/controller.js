function rennderDssp(dssp){
    var contentHTML = "";
    for (var i = 0 ; i < dssp.length ; i++){
        var data = dssp[i];
        var trString = `<tr>
            <td>${data.ma}</td>
            <td>${data.ten}</td>
            <td>${data.gia}</td>
            <td>${data.moTa}</td>
            <td>0</td>
            <td>
            <button class="btn btn-btn-outline-danger">Xóa</button>
            <button class="btn-btn-primary">Sửa</button>
            </td>
        </tr>`
        contentHTML = contentHTML + trString;
    }
    document.getElementById('tbodySanPham').innerHTML = contentHTML;
}