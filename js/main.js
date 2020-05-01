(function() {
    let episodes = [
        { id: 4, img: '04.jpg', episode: 'IV', name: 'A New Hope', year: 1977 },
        { id: 5, img: '05.jpg', episode: 'V', name: 'The Empire Strikes Back', year: 1980 },
        { id: 6, img: '06.jpg', episode: 'VI', name: 'Return of the Jedi', year: 1983 },

        { id: 1, img: '01.jpg', episode: 'I', name: 'The Phantom Menace', year: 1999 },
        { id: 2, img: '00.jpg', episode: 'II', name: 'Attack of the Clones', year: 2002 },
        { id: 3, img: '00.jpg', episode: 'III', name: 'Revenge of the Sith', year: 2005 },

        { id: 7, img: '00.jpg', episode: 'VII', name: 'The Force Awakens', year: 2015 },
        { id: 8, img: '00.jpg', episode: 'VIII', name: 'The Last Jedi', year: 2017 },
        { id: 9, img: '00.jpg', episode: 'IX', name: 'The Rise of Skywalker', year: 2019 }
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

    function fillNode(node, data) {
        if (data.img) {
            node.innerHTML = node.innerHTML.replace('00.jpg', data.img);
        }

        Object.keys(data).forEach(function(key) {
            let value = data[key];
            node.innerHTML = node.innerHTML.replace('{{' + key + '}}', value);
        });

        return node;
    }
}());
