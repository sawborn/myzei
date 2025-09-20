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