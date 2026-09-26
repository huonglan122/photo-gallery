function initializeGallery() {
    console.log("Sự kiện onload: Trang web ẩm thực Hà Nội đã tải xong.");
    addTabindex();
}

function addTabindex() {
    console.log("Bắt đầu hàm addTabindex()...");
    const images = document.querySelectorAll('.preview img');

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        console.log(`[Thành công] Đã thêm tabindex="0" cho ảnh số ${i + 1}`);
    }
}

function upDate(previewPic) {
    console.log("----------------------------------------");
    console.log("Sự kiện Focus / Mouseover đã kích hoạt!");

    // 1. Cập nhật ảnh lớn phía trên
    const displayDiv = document.getElementById('image');
    displayDiv.style.backgroundImage = `url('${previewPic.src}')`;
    displayDiv.innerText = previewPic.alt;

    // 2. Hiển thị chữ mô tả ngay dưới ảnh nhỏ đang được chọn
    const parentFigure = previewPic.parentElement;
    const caption = parentFigure.querySelector('.caption');
    if (caption) {
        caption.innerText = previewPic.alt;
        caption.style.display = "block";
    }
}

function unDo(previewPic) {
    console.log("Sự kiện Blur / Mouseleave đã kích hoạt!");

    // 1. Trả ảnh lớn về trạng thái ban đầu
    const displayDiv = document.getElementById('image');
    displayDiv.style.backgroundImage = "url('')";
    displayDiv.innerText = "Di chuột vào ảnh hoặc dùng phím Tab để khám phá các món ăn Hà Nội.";

    // 2. Ẩn chữ mô tả bên dưới ảnh nhỏ
    if (previewPic) {
        const parentFigure = previewPic.parentElement;
        const caption = parentFigure.querySelector('.caption');
        if (caption) {
            caption.innerText = "";
            caption.style.display = "none";
        }
    }
}