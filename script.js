function generateQRCode() {
    let text = document.getElementById('text').value.trim();
    let qrColor = document.getElementById('qr-color').value.substring(1);/*убирает первый символ из строки*/
    let bgColor = document.getElementById('bg-color').value.substring(1);/*убирает первый символ из строки*/
    let qrImg = document.getElementById('qr-img');
    let qrCodeDiv = document.getElementById('qr-code');
    /*if для проверки inputa пуста ли она*/
    if (text !== "") {
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}&color=${qrColor}&bgcolor=${bgColor}`; /*Генерирует и вставляет QR-код*/
        qrCodeDiv.style.display = "block"; /*показывает блок с QR-кодом, когда он сгенерирован*/
    }
}