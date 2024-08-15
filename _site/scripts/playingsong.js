// this script is under the MIT license (https://max.nekoweb.org/resources/license.txt)

const USERNAME = "trademarkhell"; // Put your LastFM username here
const BASE_URL = `https://lastfm-last-played.biancarosa.com.br/${USERNAME}/latest-song`;

const createMarqueeText = (text) => {
    if (text.length > 9) {
        return `<marquee>${text}</marquee>`;
    }
    return text;
};

const getTrack = async () => {
    const request = await fetch(BASE_URL);
    const json = await request.json();

    let isPlaying = json.track['@attr']?.nowplaying || false;

    if (!isPlaying) {
        // Trigger if a song isn't playing
        document.getElementById("listeningStatus").innerHTML = "last played...";
        document.getElementById("listening").innerHTML = `
            <img src="${json.track.image[1]['#text']}" alt="Cover Image Not Found // trademarkhell.net">
            <div id="trackInfo">
                <h3 id="trackName">${createMarqueeText(json.track.name)}</h3>
                <p id="artistName">${createMarqueeText(json.track.artist['#text'])}</p>
                <p id="albumTitle">${createMarqueeText(json.track.album['#text'])}</p>
            </div>
        `;
    } else {
        // Trigger if a song is playing
        document.getElementById("listeningStatus").innerHTML = "listening to...";
        document.getElementById("listening").innerHTML = `
            <img src="${json.track.image[1]['#text']}" alt="Cover Image Not Found // trademarkhell.net">
            <div id="trackInfo">
                <h3 id="trackName">${createMarqueeText(json.track.name)}</h3>
                <p id="artistName">${createMarqueeText(json.track.artist['#text'])}</p>
                <p id="albumTitle">${createMarqueeText(json.track.album['#text'])}</p>
            </div>
        `;
    }
};

getTrack();
setInterval(() => { getTrack(); }, 10000);