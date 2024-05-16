



document.addEventListener('DOMContentLoaded', () => {
  
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
    const countdownEl = document.getElementById('countdown');
  
    function showPopup() {
      popup.classList.remove('hidden');
    }
  
    function hidePopup() {
      popup.classList.add('hidden');
    }
  
    closePopup.addEventListener('click', hidePopup);
  
    const endDate = new Date('May 24, 2024 00:00:00').getTime();
  
    function updateCountdown() {
      const now = new Date().getTime();
      const distance = endDate - now;
    
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    
      if (distance <= 0) {
        clearInterval(x);
        countdownEl.innerHTML = 'Discontinued';
      }
    }
  
    const x = setInterval(updateCountdown, 0);
    showPopup();
  });