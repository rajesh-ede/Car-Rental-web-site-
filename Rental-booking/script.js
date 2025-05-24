document.addEventListener("DOMContentLoaded", () => {
    // Show alert when any "Book Now" or header button is clicked
    document.querySelectorAll('.button, .buttonn').forEach(button => {
        button.addEventListener('click', () => {
            alert('Thanks for choosing GoCruze! Booking process will be available now.');
        });
    });

    // Highlight nav links with an alert when clicked
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert(`You clicked on: ${link.textContent.trim()}`);
        });
    });

    // Smooth scroll to top when page is fully loaded
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


document.addEventListener("DOMContentLoaded", () => {
    const bookButtons = document.querySelectorAll('.button');

    bookButtons.forEach(button => {
        // Hover effect
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = '#28a745'; // green on hover
            button.style.color = '#fff';
        });

        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = ''; // reset
            button.style.color = '';
        });

        // Mouse down (click start)
        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.95)';
        });

        // Mouse up (click end)
        button.addEventListener('mouseup', () => {
            button.style.transform = 'scale(1)';
        });

        // Final click
        button.addEventListener('click', () => {
            alert('🚗 Booking Clicked! Let’s get you on the road!');
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("bookingModal");
    const closeModal = document.querySelector(".close");
    const bookingForm = document.getElementById("bookingForm");
    const bookButtons = document.querySelectorAll('.button');

    // Attach mouse events + open modal
    bookButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = '#28a745';
            button.style.color = '#fff';
        });

        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = '';
            button.style.color = '';
        });

        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.95)';
        });

        button.addEventListener('mouseup', () => {
            button.style.transform = 'scale(1)';
        });

        // Show modal on click
        button.addEventListener('click', (e) => {
            const carName = e.target.parentElement.querySelector('figcaption')?.textContent;
            document.getElementById("car").value = carName || '';
            modal.classList.remove("hidden");
        });
    });

    // Close modal on X click
    closeModal.addEventListener('click', () => {
        modal.classList.add("hidden");
    });

    // Submit form
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const car = bookingForm.car.value;
        const date = bookingForm.date.value;
        const days = bookingForm.days.value;

        alert(`✅ Booking Confirmed!\n\nCar: ${car}\nDate: ${date}\nDays: ${days}`);
        modal.classList.add("hidden");
        bookingForm.reset();
    });
});

