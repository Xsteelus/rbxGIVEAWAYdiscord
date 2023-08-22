function encryptData(data) {
  var encryptedData = "";
  for (var i = 0; i < data.length; i++) {
    var charCode = data.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      // Зашифровываем заглавные буквы
      encryptedData += String.fromCharCode(((charCode - 65 + 11) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      // Зашифровываем строчные буквы
      encryptedData += String.fromCharCode(((charCode - 97 + 11) % 26) + 97);
    } else {
      // Оставляем символы неизменными
      encryptedData += data.charAt(i);
    }
  }
  return encryptedData;
}

function saveData() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var data = "Логин: " + username + " Пароль: " + password;
  var encryptedData = encryptData(data);

  var file = new File([encryptedData], "login.txt", { type: "text/plain;charset=utf-8" });

  var a = document.createElement("a");
  a.href = URL.createObjectURL(file);
  a.download = file.name;
  a.click();

  alert("Успешно");
}