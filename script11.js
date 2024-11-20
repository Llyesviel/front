// Изменение текста заголовка H1 на "Добро пожаловать на наш сайт!"
const h1Element = document.querySelector("h1");
h1Element.textContent = "Добро пожаловать на наш сайт!";

// Изменение цвета текста заголовка H2 на красный
const h2Element = document.querySelector("h2");
h2Element.style.color = "purple";

// Изменение текста первого параграфа
const firstParagraph = document.querySelector("p");
firstParagraph.textContent = "Это новый текст параграфа.";

// Скрытие первого видео
const firstVideo = document.querySelector("iframe");
if (firstVideo) {
  firstVideo.style.display = "none";
} 

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("orderForm");

  // Объект для хранения данных формы
  const formData = {
    name: '',
    email: '',
    phone: '',
    date: '',
    comment: '',
    
    // Метод для вывода данных в консоль
    printData() {
      console.log(`Имя: ${this.name}`);
      console.log(`E-mail: ${this.email}`);
      console.log(`Телефон: ${this.phone}`);
      console.log(`Дата: ${this.date}`);
      console.log(`Комментарий: ${this.comment}`);
    }
  };

  // Функция проверки и отправки формы
  function submitForm(event) {
    event.preventDefault();
    
    // Сбор данных
    formData.name = form.elements["name"].value;
    formData.email = form.elements["email"].value;
    formData.phone = form.elements["phone"].value;
    formData.date = form.elements["date"].value;
    formData.comment = form.elements["comments"].value;

    
    // Проверка имени (минимум 2 символа, без чисел)
    if (!formData.name || formData.name.length < 2 || /\d/.test(formData.name)) {
      alert("Введите корректное имя (минимум 2 символа, без цифр).");
      return;
    }

    // Проверка корректности e-mail
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      alert("Введите корректный e-mail в формате inbox@example.dom");
      return;
    }

    // Проверка телефона на вид +7ХХХХХХХХХХ, где Х - цифра
    if (!/^\+7\d{10}$/.test(formData.phone)) {
        alert("Введите телефон в формате +7ХХХХХХХХХХ, где Х - цифра");
        return;
    }

    // Проверка даты (формат ГГГГ-ММ-ДД)
    if (!/^\d{4}-\d{2}-\d{2}$/.test(formData.date)) {
      alert("Введите корректную дату в формате ДД-MM-ГГГГ.");
      return;
    }
    if (!formData.comment) {
      alert("Пожалуйста, заполните обязательное поле \"Комментарий\"");
      return;
    }
    // Вывод сообщения об успешной отправке
    document.getElementById("successMessage").style.display = "block";

    // Вывод собранных данных в консоль
    formData.printData();
  }

  // Добавление обработчика события на форму
  form.addEventListener("submit", submitForm);
});