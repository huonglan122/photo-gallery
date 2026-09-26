/**
 * Khởi tạo thư viện khi toàn bộ trang HTML được tải xong (onload)
 */
function initializeGallery() {
    console.log("Sự kiện onload: Trang web ẩm thực Hà Nội đã tải xong.");
    addTabindex();
}

/**
 * Tự động thêm thuộc tính tabindex="0" cho tất cả các ảnh món ăn bằng vòng lặp for
 */
function addTabindex() {
    console.log("Bắt đầu hàm addTabindex()...");
    const images = document.querySelectorAll('.preview img');

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        console.log(`[Thành công] Đã thêm tabindex="0" cho món: ${images[i].alt.split(' ')[0]} (Ảnh số ${i + 1})`);
    }
}

/**
 * Hàm cập nhật hình ảnh lớn và mô tả khi di chuột (mouseover) hoặc lấy nét bàn phím (focus)
 * @param {HTMLImageElement} previewPic - Thẻ <img> đang được tương tác
 */
function upDate(previewPic) {
    console.log("----------------------------------------");
    console.log("Sự kiện Focus / Mouseover đã kích hoạt!");
    console.log("URL ảnh:", previewPic.src);
    console.log("Mô tả Alt:", previewPic.alt);

    const displayDiv = document.getElementById('image');
    
    // Cập nhật ảnh nền và nội dung chữ
    displayDiv.style.backgroundImage = `url('${previewPic.src}')`;
    displayDiv.innerText = previewPic.alt;
}

/**
 * Hàm khôi phục vùng hiển thị về trạng thái ban đầu khi rời chuột (mouseleave) hoặc mất nét bàn phím (blur)
 */
function unDo() {
    console.log("Sự kiện Blur / Mouseleave đã kích hoạt!");

    const displayDiv = document.getElementById('image');
    
    // Đưa về trạng thái ban đầu
    displayDiv.style.backgroundImage = "url('')";
    displayDiv.innerText = "Rê chuột hoặc dùng phím Tab để khám phá các món ăn Hà Nội.";
}