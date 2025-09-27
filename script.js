      function toggleDropdown(button) {
        const dropdownContent = button.nextElementSibling;
        // Закрыть все открытые dropdown-content
        document.querySelectorAll(".dropdown-content").forEach((dc) => {
          if (dc !== dropdownContent) {
            dc.classList.remove("show");
          }
        });
        // Переключить текущее
        dropdownContent.classList.toggle("show");
      }

      function openModal(text) {
    document.getElementById("modal-text").innerText = text;
    document.getElementById("modal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }

  // Закрытие по клику на фон
  window.onclick = function (event) {
    let modal = document.getElementById("modal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };