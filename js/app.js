// 3D scroll

let zSpacing = -950,
    lastPos = zSpacing / 5,
    $frames = document.getElementsByClassName('frame'),
    frames = Array.from($frames),
    zVals = []

//начало основной логики для прокрутки
    window.onscroll = function() {

        let top = document.documentElement.scrollTop;
        delta = lastPos - top;

        lastPos = top;

        frames.forEach(function(n, i) {
            zVals.push((i * zSpacing) + zSpacing);
            zVals[i] += delta * -5;//индекс для управления скоростью пролистывания
            let frame = frames[i];
            transform = `translateZ(${zVals[i]}px)`;

            opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;

            frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`);
        });

    }


    window.scrollTo(0,1)


//Audio

let soundButton = document.querySelector('.soundbutton'),
    audio = document.querySelector('.audio')

    soundButton.addEventListener('click', e => {
        soundButton.classList.toggle('paused');
        audio.paused ? audio.play() : audio.pause();
        audio.volume = 0.5;
    });
    // Убираем фокус
    window.onfocus = function() {
        // soundButton.classList.contains('paused') ? audio.pause() : audio.play();
        audio.pause();
        if (audio.pause) {
            soundButton.classList.add('paused');
        }        
    };
    // покидаем страницу
    window.onblur = function() {
        audio.pause();
    };


