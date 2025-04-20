const calendarMonth = document.querySelector(".month-year");
const calendarDays = document.querySelector(".calendar-days");
const calendarNav = document.querySelectorAll(".calendar-nav");

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

function generateCalendar() {
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Sửa lỗi 1
  const today = new Date().getDate();
  // Tính toán ngày đầu tuần (Chủ Nhật)
  const firstDayOfWeek = new Date(
    currentYear,
    currentMonth,
    today - currentDate.getDay()
  );
  // Tính toán ngày cuối tuần (Thứ Bảy)
  const lastDayOfWeek = new Date(
    currentYear,
    currentMonth,
    today + (6 - currentDate.getDay())
  );
  calendarMonth.textContent = `${new Date(
    currentYear,
    currentMonth,
    1
  ).toLocaleString("default", { month: "long" })} ${currentYear}`;
  calendarDays.innerHTML = "";
  // Lọc và hiển thị các ngày trong tuần hiện tại
  for (let i = 1; i <= daysInMonth; i++) {
    const currentDate = new Date(currentYear, currentMonth, i);
    if (currentDate >= firstDayOfWeek && currentDate <= lastDayOfWeek) {
      const dayElement = document.createElement("span");
      dayElement.textContent = i;
      if (
        i === today &&
        currentMonth === new Date().getMonth() &&
        currentYear === new Date().getFullYear()
      ) {
        dayElement.classList.add("selected");
      }
      calendarDays.appendChild(dayElement);
    }
  }
}

generateCalendar();

calendarNav.forEach((nav) => {
  nav.addEventListener("click", () => {
    if (nav.textContent === "<") {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
    } else {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
    }
    generateCalendar();
  });
});

document.getElementById("sellect-all").addEventListener('change', function () {
  let checkbox = document.querySelectorAll(".item-check");
  checkbox.forEach((check) => {
    check.checked = this.checked;
  });
});

document.querySelectorAll(".dots").forEach((dot, index) => {
  dot.addEventListener("click", () => {
    const detailRow = document.querySelectorAll(".task__view--detail")[index];
    if (detailRow) {
      detailRow.style.display =
        detailRow.style.display === "table-row" ? "none" : "table-row";
    }
  });
});
