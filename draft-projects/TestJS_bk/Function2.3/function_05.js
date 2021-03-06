let starArray = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let constellationArray = ["Ursa Minor", "Taurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];


function getConstellationName(starName) {

    for (let i in starArray) {
        if (starName.trim().toLowerCase() === starArray[i].toLowerCase()) {
            return constellationArray[i];
        }
    }

    return "Unknown!";
}