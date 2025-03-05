const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

    const images = ['pic1.webp', 'pic2.webp', 'pic3.jpeg', 'pic4.webp'];

    const alts = {
        'pic1.webp': 'Description for picture 1',
        'pic2.webp': 'Description for picture 2',
        'pic3.jpeg': 'Description for picture 3',
        'pic4.webp': 'Description for picture 4'
    }

    
    for (const image of images) {
        const newImage = document.createElement('img');
        newImage.setAttribute('src', `images/${image}`);
        newImage.setAttribute('alt', alts[image]);
        thumbBar.appendChild(newImage);
        newImage.addEventListener('click', e => {
          displayedImage.src = e.target.src;
          displayedImage.alt = e.target.alt;
        });
      }
      
      /* Wiring up the Darken/Lighten button */
      
      btn.addEventListener('click', () => {
        const btnClass = btn.getAttribute('class');
        if (btnClass === 'dark') {
          btn.setAttribute('class','light');
          btn.textContent = 'Lighten';
          overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        } else {
          btn.setAttribute('class','dark');
          btn.textContent = 'Darken';
          overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        }
      });