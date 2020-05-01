(function() {
    let episodes = [
        { id: 4, img: '04.jpg', episode: 'IV', name: 'A New Hope', year: 1977 },
        { id: 5, img: '05.jpg', episode: 'V', name: 'The Empire Strikes Back', year: 1980 },
        { id: 6, img: '06.jpg', episode: 'VI', name: 'Return of the Jedi', year: 1983 },

        { id: 1, img: '01.jpg', episode: 'I', name: 'The Phantom Menace', year: 1999 },
        { id: 2, img: '02.jpg', episode: 'II', name: 'Attack of the Clones', year: 2002 },
        { id: 3, img: '03.jpg', episode: 'III', name: 'Revenge of the Sith', year: 2005 },

        { id: 7, img: '07.jpg', episode: 'VII', name: 'The Force Awakens', year: 2015 },
        { id: 8, img: '08.jpg', episode: 'VIII', name: 'The Last Jedi', year: 2017 },
        { id: 9, img: '09.jpg', episode: 'IX', name: 'The Rise of Skywalker', year: 2019 }
    ];

    const episodesElem = document.querySelector('#episodes');
    const episodeElem = document.querySelector('.episode');

    episode = episodes[0];
    if (episode.img) {
        episodeElem.innerHTML = episodeElem.innerHTML.replace('00.jpg', episode.img);
    }

    Object.keys(episode).forEach(function(key) {
        let value = episode[key];
        episodeElem.innerHTML = episodeElem.innerHTML.replace('{{' + key + '}}', value);
    });
}());
