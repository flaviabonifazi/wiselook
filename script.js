document.getElementById("menuIcon").addEventListener("click", function() {
    document.getElementById("sidebar").classList.add("open"); // Aggiungi la classe "open" per aprire il menu
  });
  
  document.addEventListener("click", function(event) {
    const sidebar = document.getElementById("sidebar");
    const menuIcon = document.getElementById("menuIcon");
    if (!sidebar.contains(event.target) && event.target !== menuIcon) {
      sidebar.classList.remove("open"); // Rimuovi la classe "open" per chiudere il menu quando si fa clic fuori da esso
    }
  });

  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
      let slides = document.getElementsByClassName("carousel-item");
      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      slides[slideIndex-1].style.display = "block";  
  }
  
  function nextSlide() {
      let slides = document.getElementsByClassName("carousel-item");
      if (slideIndex >= slides.length) {
          slideIndex = 0;
      }
      slideIndex++;
      showSlides();
  }
  
  function prevSlide() {
      let slides = document.getElementsByClassName("carousel-item");
      if (slideIndex <= 1) {
          slideIndex = slides.length + 1;
      }
      slideIndex--;
      showSlides();
  }


  function openCameraPage() {
    window.location.href = "camera.html"; // Apri la nuova pagina per scattare la foto
  }