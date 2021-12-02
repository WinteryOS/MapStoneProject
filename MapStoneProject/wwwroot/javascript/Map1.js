
//Instantiate the map

var map = L.map('mapid', {
    fullscreenControl: true,
    fullscreenControlOptions: {
        position: 'topleft'
    }
}).setView([0, 0], 1);


map.invalidateSize();

L.simpleMapScreenshoter().addTo(map)

//This references our premade tiles to create the map

L.tileLayer('../OSRSMap/OSRSTiles2/{z}/{x}/{y}.jpg',
    {
        noWrap: true,
        maxZoom: 5,
        minZoom: 3,

    }).addTo(map);



//Image links to anything used in teleport tooltips!


var air = "<img style='width:32px;height:32px;' src='https://general-543f.kxcdn.com/world-map/Runes/Air.png'>";
mind = "<img style='width:32px;height:32px;' src='https://general-543f.kxcdn.com/world-map/Runes/Mind.png'>";
water = "<img style='width:32px;height:32px;' src='https://general-543f.kxcdn.com/world-map/Runes/Water.png'>";
earth = "<img style='width:32px;height:32px;' src='https://general-543f.kxcdn.com/world-map/Runes/Earth.png'>";
fire = "<img style='width:32px;height:32px;' src='https://general-543f.kxcdn.com/world-map/Runes/Fire.png'>";
body = "<img style='width:32px;height:32px;' src='https://general-543f.kxcdn.com/world-map/Runes/Body.png'>";
cosmic = "<img style='width:32px;height:32px;' src='https://general-543f.kxcdn.com/world-map/Runes/Cosmic.png'>";
chaos = "<img style='width:32px;height:32px;' src='https://general-543f.kxcdn.com/world-map/Runes/Chaos.png'>";
nature = "<img style='width:32px;height:32px;' src='https://general-543f.kxcdn.com/world-map/Runes/Nature.png'>";
law = "<img style='width:32px;height:32px;' src='https://general-543f.kxcdn.com/world-map/Runes/Law.png'>";
death = "<img style='width:32px;height:32px;' src='https://general-543f.kxcdn.com/world-map/Runes/Death.png'>";
astral = "<img style='width:32px;height:32px;' src='https://general-543f.kxcdn.com/world-map/Runes/Astral.png'>";
blood = "<img style='width:32px;height:32px;' src='https://general-543f.kxcdn.com/world-map/Runes/Blood.png'>";
soul = "<img style='width:32px;height:32px;' src='https://general-543f.kxcdn.com/world-map/Runes/Soul.png'>";
banana = "<img style='width:32px;height:32px;' src='https://general-543f.kxcdn.com/world-map/Runes/Banana.png'>";
fairy_ring = "<img style='width:32px;height:32px;' src='https://i.ibb.co/m43f3YH/Fairy-ring.png'>"


//Everything related to Standard Spellbook Teleport Markers

var Varrock = L.marker([17.24312, 90.5712], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [32, 32], iconUrl:'https://general-543f.kxcdn.com/world-map/Standard/Varrock.png'})}).bindPopup('<div class="tth">Varrock Teleport</div><br> <strong>25 Magic</strong><br> Teleports you to the center of Varrock<br><br> <img src = "https://general-543f.kxcdn.com/items/law_rune.png" > <img src="https://general-543f.kxcdn.com/items/fire_rune.png"> <img src="https://general-543f.kxcdn.com/items/air_rune.png"> <br> <div class="rune-count">1 1 3</div>', { maxWidth: 500 })
Lumbridge = L.marker([-10.505365912342125, 92.30712890625001], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://general-543f.kxcdn.com/world-map/Standard/Lumbridge.png' }) }).bindPopup('<ttH>Lumbridge</ttH><br><b>31 Magic</b><br>Teleports you to Lumbridge castle courtyard<br><br>' + law + earth + air + '<br><runeCount>1 1 3</runeCount>', { maxWidth: 500 })
Falador = L.marker([11.03151596829206, 57.81005859375001], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://general-543f.kxcdn.com/world-map/Standard/Falador.png' }) }).bindPopup('<ttH>Falador</ttH><br><b>37 Magic</b><br>Teleports you to the Falador square<br><br>' + law + water + air + '<br><runeCount>1 1 3</runeCount>', { maxWidth: 500 })
Camelot = L.marker([23.305684898790933, 30.739746093750004], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://general-543f.kxcdn.com/world-map/Standard/Camelot.png' }) }).bindPopup('<ttH>Camelot</ttH><br><b>45 Magic</b><br>Teleports you outside of the Camelot castle<br><br>' + law + air + fairy_ring + '<br><runeCount>1 5</runeCount>', { maxWidth: 500 })
Ardougne = L.marker([1.124653114544988, 17.775878906250004], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://general-543f.kxcdn.com/world-map/Standard/Ardougne.png' }) }).bindPopup('<ttH>Ardougne</ttH><br><b>51 Magic<br>Requires completion of <a href="http://2007.runescape.wikia.com/wiki/Plague_City" target="_blank">Plague City</a></b><br>Teleports you to the Ardougne market<br><br>' + law + water + '<br><runeCount>2 2</runeCount>', { maxWidth: 500 })
Watchtower = L.marker([-23.419148023565285, 2.83447265625], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://general-543f.kxcdn.com/world-map/Standard/Watchtower.png' }) }).bindPopup('<ttH>Watchtower</ttH><br><b>58 Magic<br>Completion of <a href="http://2007.runescape.wikia.com/wiki/Watchtower" target="_blank">Watchtower</a></b><br>Teleports you to the top of<br>Yanille watchtower<br><br>' + law + earth + '<br><runeCount>2 2</runeCount>', { maxWidth: 500 })
Trollheim = L.marker([44.640322728862955, 48.27392578125001], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://general-543f.kxcdn.com/world-map/Standard/Trollheim.png' }) }).bindPopup('<ttH>Trollheim</ttH><br><b>61 Magic<br>Completion of <a href="http://2007.runescape.wikia.com/wiki/Eadgar%27s_Ruse" target="_blank">Eadgars Ruse</a></b><br>Teleports you to the top of Trollheim<br><br>' + law + fire + '<br><runeCount>2 2', { maxWidth: 500 })
ApeAtoll = L.marker([-55.73909514511557, 35.79345703125001], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://general-543f.kxcdn.com/world-map/Standard/ApeAtoll.png' }) }).bindPopup('<ttH>Ape Atoll</ttH><br><b>64 Magic<br>Completion of <a href="http://2007.runescape.wikia.com/wiki/Recipe_for_Disaster#Awowogei" target="_blank">RFD subquest</a></b><br>Teleports you to the second floor of<br>the monastery on Ape Atoll<br><br>' + law + fire + water + banana + '<br><runeCount>2 2 2 1</runeCount>', { maxWidth: 500 })
Kourend = L.marker([44.26142900238292, -116.16943359375001], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://general-543f.kxcdn.com/world-map/Standard/Kourend.png' }) }).bindPopup('<ttH>Kourend</ttH><br><b>69 Magic</b><br>Teleports you to the center of Great Kourend<br><br>' + law + soul + water + fire + '<br>2 2 4 5', { maxWidth: 500 })


var StandardMarkers = L.layerGroup([Varrock, Lumbridge, Falador, Camelot, Ardougne, Watchtower, Trollheim, ApeAtoll, Kourend]);


//Everything related to Lunar Spellbook Teleport Markers

var Moonclan = L.marker([62.8416715679386, -54.63294982910157], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://general-543f.kxcdn.com/world-map/Lunars/Moonclan.png' }) }).bindPopup('<ttH>Moonclan</ttH><br><b>69 Magic</b><br>Teleports you to Lunar Isle<br><br>' + law + astral + earth + '<br><runeCount>1 2 2</runeCount>', { maxWidth: 500 });
Ourania = L.marker([-6.344644288623892, -7.787246704101563], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://general-543f.kxcdn.com/world-map/Lunars/Ourania.png' }) }).bindPopup('<ttH>Ourania</ttH><br><b>71 Magic<br>Talk to <a href="http://2007.runescape.wikia.com/wiki/Baba_Yaga" target="_blank">Baba Yaga</a> to unlock</b><br>Teleports you to outside of the Ourania Cave<br><br>' + law + astral + water + '<br><runeCount>1 2 1</runeCount>', { maxWidth: 500 });
WaterbirthIsland = L.marker([50.32661459785906, 0.34263610839843756], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://general-543f.kxcdn.com/world-map/Lunars/Waterbirth.png' }) }).bindPopup('<ttH>Waterbirth</ttH><br><b>72 Magic</b><br>Teleports you to Waterbirth Island<br><br>' + law + astral + water + '<br><runeCount>1 2 1</runeCount>', { maxWidth: 500 });
BarbarianOutpost = L.marker([33.84589679025758, 0.6502532958984376], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://general-543f.kxcdn.com/world-map/Lunars/Barbarian.png' }) }).bindPopup('<ttH>Barbarian</ttH><br><b>75 Magic</b><br>Teleports you to Barbarian Outpost<br><br>' + law + astral + fire + '<br><runeCount>2 2 3</runeCount>', { maxWidth: 500 });
Khazard = L.marker([-18.452254808461078, 16.11900329589844], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://general-543f.kxcdn.com/world-map/Lunars/Khazard.png' }) }).bindPopup('<ttH>Khazard</ttH><br><b>79 Magic</b><br>Teleports you to Port Khazard<br><br>' + law + astral + water + '<br><runeCount>2 2 4</runeCount>', { maxWidth: 500 });
FishGuild = L.marker([12.954375086560455, 11.02134704589844], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://general-543f.kxcdn.com/world-map/Lunars/FishingGuild.png' }) }).bindPopup('<ttH>Fishing Guild</ttH><br><b>85 Magic</b><br>Teleports you to the Fishing Guild<br><br>' + law + astral + water + '<br><runeCount>3 3 10</runeCount>', { maxWidth: 500 });
Catherby = L.marker([17.65776273554449, 36.641464233398445], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://general-543f.kxcdn.com/world-map/Lunars/Catherby.png' }) }).bindPopup('<ttH>Catherby</ttH><br><b>87 Magic</b><br>Teleports you to the Catherby<br><br>' + law + astral + water + '<br><runeCount>3 3 10</runeCount>', { maxWidth: 500 });
IcePlateau = L.marker([63.59408879170181, 57.998886108398445], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://general-543f.kxcdn.com/world-map/Lunars/IcePlateau.png' }) }).bindPopup('<ttH>Ice Plateau</ttH><br><b>89 Magic</b><br>Teleports you to the Ice Plateau<br>in level 45 wilderness<br><br>' + law + astral + water + '<br><runeCount>3 3 10</runeCount>', { maxWidth: 500 });

var lunarsMarkers = L.layerGroup([Moonclan, Ourania, WaterbirthIsland, BarbarianOutpost, Khazard, FishGuild, Catherby, IcePlateau]);


//All the markers related to Fairy Rings

var AIQ = L.marker([-22.702088278948246, 61.602401733398445], { icon: L.icon({ popupAnchor: [0, 0], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: AIQ</h3>', { maxWidth: 500 });
AIR = L.marker([-6.199264240303361, 22.71080017089844], { icon: L.icon({ popupAnchor: [0, 0], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: AIR</h3>', { maxWidth: 500 });
AJR = L.marker([38.731054199763825, 33.345565795898445], { icon: L.icon({ popupAnchor: [0, 0], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: AJR</h3>', { maxWidth: 500 });
AJS = L.marker([61.192573759231614, -1.9864654541015627], { icon: L.icon({ popupAnchor: [0, 0], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: AJS</h3>', { maxWidth: 500 });
AKQ = L.marker([38.97062043076873, -27.606582641601562], { icon: L.icon({ popupAnchor: [0, 0], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: AKQ</h3>', { maxWidth: 500 });
AKS = L.marker([-40.836151668569975, 5.8358001708984375], { icon: L.icon({ popupAnchor: [0, 0], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: AKS</h3>', { maxWidth: 500 });
ALP = L.marker([40.45791954650313, -2.381973266601563], { icon: L.icon({ popupAnchor: [0, 0], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: ALP</h3>', { maxWidth: 500 });
ALQ = L.marker([25.337199692429877, 141.23130798339847], { icon: L.icon({ popupAnchor: [0, 0], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: ALQ</h3>', { maxWidth: 500 });
ALS = L.marker([25.49596719590054, 15.37193298339844], { icon: L.icon({ popupAnchor: [0, 0], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: ALS</h3>', { maxWidth: 500 });
BIP = L.marker([3.8491826245028906, 116.49009704589845], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: BIP</h3>', { maxWidth: 500 });
BIQ = L.marker([-25.54925618332918, 95.30845642089845], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: BIQ</h3>', { maxWidth: 500 });
BIS = L.marker([-3.674465346264988, 14.27330017089844], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: BIS</h3>', { maxWidth: 500 });
BJS = L.marker([-28.755018468281996, -49.97474670410156], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: BJS</h3>', { maxWidth: 500 });
BKP = L.marker([-32.27494178315846, -18.685684204101566], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: BKP</h3>', { maxWidth: 500 });
BKR = L.marker([17.825183961169284, 124.04869079589845], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: BKR</h3>', { maxWidth: 500 });
BLR = L.marker([7.681731875633019, 27.94029235839844], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: BLR</h3>', { maxWidth: 500 });
CIP = L.marker([61.8836663767502, -3.656387329101563], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: CIP</h3>', { maxWidth: 500 });
CIQ = L.marker([-21.52143339135901, 0.03501892089843751], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: CIQ</h3>', { maxWidth: 500 });
CIS = L.marker([59.874121178813404, -117.07923889160158], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: CIS</h3>', { maxWidth: 500 });
CJR = L.marker([34.60891035148567, 23.369979858398438], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: CJR</h3>', { maxWidth: 500 });
CKR = L.marker([-36.05520550221327, 36.026229858398445], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: CKR</h3>>', { maxWidth: 500 });
CKS = L.marker([22.607038308040828, 121.19224548339845], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: CKS</h3>', { maxWidth: 500 });
CLP = L.marker([-11.767209140430383, 73.02818298339845], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: CLP</h3>', { maxWidth: 500 });
CLR = L.marker([-59.10090421670123, 27.808456420898438], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: CLR</h3>', { maxWidth: 500 });
CLS = L.marker([-27.0854164971554, 20.29380798339844], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: CLS</h3>', { maxWidth: 500 });
DIS = L.marker([-19.173058544975852, 76.85142517089844], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: DIS</h3>', { maxWidth: 500 });
DJP = L.marker([-8.56676280695425, 17.21763610839844], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: DJP</h3>', { maxWidth: 500 });
DJR = L.marker([42.918720712178285, -141.6446685791016], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: DJR</h3>', { maxWidth: 500 });
DKP = L.marker([-23.872652448766246, 49.20982360839844], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: DKP</h3>', { maxWidth: 500 });
DKR = L.marker([26.954513389630172, 79.61997985839845], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: DKR</h3>', { maxWidth: 500 });
DKS = L.marker([48.70047813100718, 28.59947204589844], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: DKS</h3>', { maxWidth: 500 });
DLQ = L.marker([-34.40407704011786, 117.98423767089845], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: DLQ</h3>', { maxWidth: 500 });
DLR = L.marker([-25.112336726504633, -41.49330139160157], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: 'https://i.ibb.co/2Z9s5kb/fairy-ring.png' }) }).bindPopup('<h3> Fairy Ring: DLR</h3>', { maxWidth: 500 });
var fairyRingMarkers = L.layerGroup([AIQ, AIR, AJR, AJS, AKQ, AKS, ALP, ALQ, ALS, BIP, BIQ, BIS, BJS, BKP, BLR, CIP, CIQ, CIS, CJR, CKR, CKS, CLP, CLR, CLS, DIS, DJP, DJR, DKP, DKR, DKS, DLQ, DLR]);

var overlayMaps = {
    "Standard Spellbook Teleports": StandardMarkers,
    "Lunar Spellbook Teleports": lunarsMarkers,
    "Fairy Ring Locations": fairyRingMarkers,
    
};


L.control.layers(null, overlayMaps).addTo(map);

map.on('click', function (e) {
    lat = e.latlng.lat;
    lon = e.latlng.lng;
    console.log(lat + "," + lon);
    var marker2 = new L.marker(e.latlng).addTo(map);
});




