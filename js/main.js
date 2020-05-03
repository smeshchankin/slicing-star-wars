(function() {
    let episodes = [
        { id: 4, img: '04.jpg', episode: 'IV', name: 'A New Hope', year: 1977, rating: 4 },
        { id: 5, img: '05.jpg', episode: 'V', name: 'The Empire Strikes Back', year: 1980, rating: 5 },
        { id: 6, img: '06.jpg', episode: 'VI', name: 'Return of the Jedi', year: 1983, rating: 5 },

        { id: 1, img: '01.jpg', episode: 'I', name: 'The Phantom Menace', year: 1999, rating: 3 },
        { id: 2, img: '00.jpg', episode: 'II', name: 'Attack of the Clones', year: 2002, rating: 4 },
        { id: 3, img: '00.jpg', episode: 'III', name: 'Revenge of the Sith', year: 2005, rating: 0 },

        { id: 7, img: '00.jpg', episode: 'VII', name: 'The Force Awakens', year: 2015, rating: 2 },
        { id: 8, img: '00.jpg', episode: 'VIII', name: 'The Last Jedi', year: 2017, rating: 1 },
        { id: 9, img: '00.jpg', episode: 'IX', name: 'The Rise of Skywalker', year: 2019, rating: 3 }
    ];

    const episodesElem = document.querySelector('#episodes');
    const templateElem = episodesElem.querySelector('.episode');
    episodesElem.removeChild(templateElem);

    if (episodes) {
        for (let i = 0; i < episodes.length; i++) {
            let node = templateElem.cloneNode(true);
            episodesElem.appendChild(fillNode(node, episodes[i]));
        }
    }

    $(document).ready(function() {
        $('.owl-carousel').owlCarousel({
            margin: 10,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 2
                },
                900: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        })
    });

    function fillNode(node, data) {
        if (data.img) {
            node.innerHTML = node.innerHTML.replace('00.jpg', data.img);
        }

        Object.keys(data).forEach(function(key) {
            let value = data[key];
            node.innerHTML = node.innerHTML.replace('{{' + key + '}}', value);
        });

        if (data.rating !== undefined) {
            const rating = node.getElementsByClassName('rating')[0];
            for (let i = 0; i < 5; i++) {
                const star = document.createElement('i');
                star.classList.add('star');
                if (i >= data.rating) {
                    star.classList.add('star-o');
                }
                rating.appendChild(star);
            }
        }

        return node;
    }
}());
