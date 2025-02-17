document.addEventListener("DOMContentLoaded", () => {
    const movieSelect = document.getElementById("movie");
    const totalPrice = document.getElementById("total");
    const bookBtn = document.getElementById("book-btn");
    const seatContainer = document.querySelector(".seat-container");

    const seatCount = 20; // Total number of seats
    let selectedSeats = [];

    // Generate seats dynamically
    for (let i = 0; i < seatCount; i++) {
        const seat = document.createElement("div");
        seat.classList.add("seat");
        seat.textContent = i + 1;
        seat.addEventListener("click", () => toggleSeat(seat, i));
        seatContainer.appendChild(seat);
    }

    function toggleSeat(seat, index) {
        if (selectedSeats.includes(index)) {
            selectedSeats = selectedSeats.filter(seatIndex => seatIndex !== index);
            seat.classList.remove("selected");
        } else {
            selectedSeats.push(index);
            seat.classList.add("selected");
        }
        updateTotal();
    }

    function updateTotal() {
        const moviePrice = +movieSelect.value;
        totalPrice.textContent = selectedSeats.length * moviePrice;
    }

    movieSelect.addEventListener("change", updateTotal);

    bookBtn.addEventListener("click", () => {
        if (selectedSeats.length === 0) {
            alert("Please select at least one seat.");
        } else {
            alert(`Booking confirmed! Total: $${totalPrice.textContent}`);
            selectedSeats = [];
            document.querySelectorAll(".seat").forEach(seat => seat.classList.remove("selected"));
            updateTotal();
        }
    });
});
