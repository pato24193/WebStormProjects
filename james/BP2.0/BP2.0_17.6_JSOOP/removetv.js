class Remote {
    constructor(code) {
        this.code = code;
    }

    changeChannel(tivi, channel) {
        tivi.changeChannel(channel);
    }

    increaseVolume(tivi, iVolume) {
        tivi.increaseVolume(iVolume);
    }

    decreaseVolume(tivi, iVolume) {
        tivi.decreaseVolume(iVolume);
    }

    turnOnOff(tivi) {
        tivi.status = tivi.status === "on"?"off":"on";
        document.writeln("Tivi is " + tivi.status + "<br>");
    }
}

class Tivi {
    constructor(channel, volume, status) {
        this.channel = channel;
        this.volume = volume;
        this.status = status;
    }

    changeChannel(channel) {
        this.channel = channel;
        document.writeln("Current channel is " + this.channel + "<br>");
    }

    increaseVolume(iVolume) {
        this.volume += iVolume;
        document.writeln("Current volume is " + this.volume + "<br>");
    }

    decreaseVolume(iVolume) {
        this.volume -= iVolume;
        document.writeln("Current volume is " + this.volume + "<br>");
    }

}

tivi = new Tivi("1", 20, "off");
remote = new Remote("Samsung");
remote.turnOnOff(tivi);
tivi.changeChannel("7");
remote.changeChannel(tivi, "3");
remote.increaseVolume(tivi, 2);
remote.turnOnOff(tivi);

