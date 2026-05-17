// ---------- MODAL FUNCTIONS ----------
function openModal(src) {
  document.getElementById("imgModal").style.display = "block";
  document.getElementById("modal-img").src = src;
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}

// ---------- SMOOTH SCROLL ----------
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ---------- FORM SUBMISSION ----------
function submitForm(event) {
  event.preventDefault();

  // Get form values
  var name = document.getElementById('name').value.trim();
  var phone = document.getElementById('phone').value.trim();
  var city = document.getElementById('city').value.trim();
  var variant = document.getElementById('variant').value;
  var comment = document.getElementById('comment').value.trim();

  if (name === '' || phone === '') {
    // Don't submit if required fields are empty
    alert('Пожалуйста, заполните обязательные поля: имя и телефон');
    return false;
  }

  // Тестовый режим - просто переходим на страницу благодарности
  console.log('Тестовая отправка формы:', {
    name: name,
    phone: phone,
    city: city,
    variant: variant,
    comment: comment
  });

  // Сразу переходим на страницу благодарности
  window.location.href = 'thankyou.html';

  return false;
}

// ---------- SCROLL ANIMATIONS ----------
document.addEventListener('DOMContentLoaded', function() {
  // Intersection Observer for reveal animations
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  // Observe all elements with reveal class
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});

// ---------- CLOSE MODAL ON ESCAPE ----------
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// ---------- CLOSE MODAL ON BACKGROUND CLICK ----------
document.addEventListener('click', function(event) {
  const modal = document.getElementById('imgModal');
  if (event.target === modal) {
    closeModal();
  }
});
