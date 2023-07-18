class Music {
    constructor(title, singer, image, file) {
        this.title = title;
        this.singer = singer;
        this.image = image;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}

const musicList = [
    new Music("In Da Club", "50 Cent", "50cent.jpg", "50cent.mp3"),
    new Music("Still D.R.E. ft. Snoop Dogg", "Dr. Dre", "dre.jpg", "dre.mp3"),
    new Music("Without Me", "Eminem", "eminem.jpg", "eminem.mp3"),
];