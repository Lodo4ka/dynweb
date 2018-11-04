document.addEventListener("DOMContentLoaded", function() {
  let movieSection = document.querySelector('#movies-sec');
  if(movieSection) {
    movieSection.addEventListener('click', sectionHandler);

    function sectionHandler(event) {
      // console.log(event.target);

      if(event.target.classList.contains('movie_watched')) {
        let btn = event.target;
        let movieId = btn.parentNode.getAttribute('data-movie-id');
        let watchedCounter = document.querySelector("#watched-count");
        let currentCount = watchedCounter.textContent;

        doAjax({
          method: "POST",
          url: 'logic/watched_movie.php',
          data: "watched_id=" +movieId,
          contentType: "application/x-form-urlencoded",
          callback: function() {
            if(btn.classList.contains('movie__watched_actibe')) {
              btn.textContent = 'don"t watch';
              --currentCount;
            }
            else {
              btn.textContent = 'watched';
              ++currentCount;
            }

            btn.classList.toggle('movie__watched_active');
            watchedCounter.textContent = currentCount;
          }
        })
      }
    }
  }
})