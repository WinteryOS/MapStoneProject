
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
var air = "<img style='width:32px;height:32px;' src='../images/Air.png'>";
mind = "<img style='width:32px;height:32px;' src='../images/Mind.png'>";
water = "<img style='width:32px;height:32px;' src='../images/Water.png'>";
earth = "<img style='width:32px;height:32px;' src='../images/Earth.png'>";
fire = "<img style='width:32px;height:32px;' src='../images/Fire.png'>";
body = "<img style='width:32px;height:32px;' src='../images/Body.png'>";
cosmic = "<img style='width:32px;height:32px;' src='../images/Cosmic.png'>";

chaos = "<img style='width:32px;height:32px;' src='../images/Chaos.png'>";
nature = "<img style='width:32px;height:32px;' src='../images/Nature.png'>";
law = "<img style='width:32px;height:32px;' src='../images/Law.png'>";
death = "<img style='width:32px;height:32px;' src='../images/Death.png'>";
astral = "<img style='width:32px;height:32px;' src='../images/Astral.png'>";
blood = "<img style='width:32px;height:32px;' src='../images/Blood (1).png'>";
soul = "<img style='width:32px;height:32px;' src='../images/Soul.png'>";
banana = "<img style='width:32px;height:32px;' src='../images/Banana.png'>";
fairy_ring = "<img style='width:32px;height:32px;' src='https://i.ibb.co/m43f3YH/Fairy-ring.png'>";
iron_ore = "<img style='width:32px;height:32px;' src='../images/iron-ore.png'>"
gold_ore = "<img style='width:32px;height:32px;' src='../images/gold_ore.png'>"
silver_ore = "<img style='width:32px;height:32px;' src='../images/silver_ore.png'>"
runite_ore = "<img style='width:32px;height:32px;' src='../images/runite_ore.png'>"
adamant_ore = "<img style='width:32px;height:32px;' src='../images/adamant_ore.png'>"
coal_ore = "<img style='width:32px;height:32px;' src='../images/coal_ore.png'>"
sandstone_ore = "<img style='width:32px;height:32px;' src='../images/sandstone_ore.png'>"



//Everything related to Standard Spellbook Teleport Markers

var Varrock = L.marker([17.24312, 90.5712], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [32, 32], iconUrl:'../images/Varrock.png'})}).bindPopup('<div class="tth">Varrock Teleport</div><br> <strong>25 Magic</strong><br> Teleports you to the center of Varrock<br><br>' + law + air + fire + '<br>1 1 3', { maxWidth: 500 })
Lumbridge = L.marker([-10.505365912342125, 92.30712890625001], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: '../images/Lumbridge.png' }) }).bindPopup('<ttH>Lumbridge</ttH><br><b>31 Magic</b><br>Teleports you to Lumbridge castle courtyard<br><br>' + law + earth + air + '<br>1 1 3', { maxWidth: 500 })
Falador = L.marker([11.03151596829206, 57.81005859375001], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: '../images/Falador.png' }) }).bindPopup('<ttH>Falador</ttH><br><b>37 Magic</b><br>Teleports you to the Falador square<br><br>' + law + water + air + '<br>1 1 3', { maxWidth: 500 })
Camelot = L.marker([23.305684898790933, 30.739746093750004], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: '../images/Camelot.png' }) }).bindPopup('<ttH>Camelot</ttH><br><b>45 Magic</b><br>Teleports you outside of the Camelot castle<br><br>' + law + air + fairy_ring + '<br>1 5', { maxWidth: 500 })
Ardougne = L.marker([1.124653114544988, 17.775878906250004], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: '../images/Ardougne.png' }) }).bindPopup('<ttH>Ardougne</ttH><br><b>51 Magic<br>Requires completion of <a href="http://2007.runescape.wikia.com/wiki/Plague_City"">Plague City</a></b><br>Teleports you to the Ardougne market<br><br>' + law + water + '<br>2 2', { maxWidth: 500 })
Watchtower = L.marker([-23.419148023565285, 2.83447265625], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: '../images/Watchtower.png' }) }).bindPopup('<ttH>Watchtower</ttH><br><b>58 Magic<br>Completion of <a href="http://2007.runescape.wikia.com/wiki/Watchtower"">Watchtower</a></b><br>Teleports you to the top of<br>Yanille watchtower<br><br>' + law + earth + '<br>2 2', { maxWidth: 500 })
Trollheim = L.marker([44.640322728862955, 48.27392578125001], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: '../images/Trollheim.png' }) }).bindPopup('<ttH>Trollheim</ttH><br><b>61 Magic<br>Completion of <a href="http://2007.runescape.wikia.com/wiki/Eadgar%27s_Ruse"">Eadgars Ruse</a></b><br>Teleports you to the top of Trollheim<br><br>' + law + fire + '<br>2 2', { maxWidth: 500 })
ApeAtoll = L.marker([-55.73909514511557, 35.79345703125001], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: '../images/ApeAtoll.png' }) }).bindPopup('<ttH>Ape Atoll</ttH><br><b>64 Magic<br>Completion of <a href="http://2007.runescape.wikia.com/wiki/Recipe_for_Disaster#Awowogei"">RFD subquest</a></b><br>Teleports you to the second floor of<br>the monastery on Ape Atoll<br><br>' + law + fire + water + banana + '<br>2 2 2 1', { maxWidth: 500 })
Kourend = L.marker([44.26142900238292, -116.16943359375001], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: '../images/Kourend.png' }) }).bindPopup('<ttH>Kourend</ttH><br><b>69 Magic</b><br>Teleports you to the center of Great Kourend<br><br>' + law + soul + water + fire + '<br>2 2 4 5', { maxWidth: 500 })


var StandardMarkers = L.layerGroup([Varrock, Lumbridge, Falador, Camelot, Ardougne, Watchtower, Trollheim, ApeAtoll, Kourend]);


//Everything related to Lunar Spellbook Teleport Markers

var Moonclan = L.marker([62.8416715679386, -54.63294982910157], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: '../images/Moonclan.png' }) }).bindPopup('<ttH>Moonclan</ttH><br><b>69 Magic</b><br>Teleports you to Lunar Isle<br><br>' + law + astral + earth + '<br>1 2 2', { maxWidth: 500 });
Ourania = L.marker([-6.344644288623892, -7.787246704101563], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: '../images/Ourania.png' }) }).bindPopup('<ttH>Ourania</ttH><br><b>71 Magic<br>Talk to <a href="http://2007.runescape.wikia.com/wiki/Baba_Yaga">Baba Yaga</a> to unlock</b><br>Teleports you to outside of the ZMI runecrafting Altar<br><br>' + law + astral + water + '<br>1 2 1', { maxWidth: 500 });
WaterbirthIsland = L.marker([50.32661459785906, 0.34263610839843756], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: '../images/Waterbirth.png' }) }).bindPopup('<ttH>Waterbirth</ttH><br><b>72 Magic</b><br>Teleports you to the Waterbirth Island<br><br>' + law + astral + water + '<br>1 2 1', { maxWidth: 500 });
BarbarianOutpost = L.marker([33.84589679025758, 0.6502532958984376], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: '../images/Barbarian.png' }) }).bindPopup('<ttH>Barbarian</ttH><br><b>75 Magic</b><br>Teleports you to the Barbarian Outpost<br><br>' + law + astral + fire + '<br>2 2 3', { maxWidth: 500 });
Khazard = L.marker([-18.452254808461078, 16.11900329589844], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: '../images/Khazard.png' }) }).bindPopup('<ttH>Khazard</ttH><br><b>79 Magic</b><br>Teleports you to the Port Khazard<br><br>' + law + astral + water + '<br>2 2 4', { maxWidth: 500 });
FishGuild = L.marker([12.954375086560455, 11.02134704589844], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: '../images/FishingGuild.png' }) }).bindPopup('<ttH>Fishing Guild</ttH><br><b>85 Magic</b><br>Teleports you to the Fishing Guild<br><br>' + law + astral + water + '<br>3 3 10', { maxWidth: 500 });
Catherby = L.marker([17.65776273554449, 36.641464233398445], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: '../images/Catherby.png' }) }).bindPopup('<ttH>Catherby</ttH><br><b>87 Magic</b><br>Teleports you to the town of Catherby<br><br>' + law + astral + water + '<br>3 3 10', { maxWidth: 500 });
IcePlateau = L.marker([63.59408879170181, 57.998886108398445], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: '../images/IcePlateau.png' }) }).bindPopup('<ttH>Ice Plateau</ttH><br><b>89 Magic</b><br>Teleports you to the Ice Plateau<br>IN THE WILDERNESS<br><br>' + law + astral + water + '<br>3 3 10', { maxWidth: 500 });

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



AlKharidMine = L.marker([0.043945308191358085, 101.79450988769531], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: '../images/crystal_pickaxe.png' }) }).bindPopup('<ttH>Al Kharid</ttH><br><br>' + iron_ore + gold_ore + silver_ore, { maxWidth: 500 });
BanditQuarryMine = L.marker([-45.33670190996811, 85.13923645019531], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: '../images/crystal_pickaxe.png' }) }).bindPopup('<ttH>Bandit Sandstone Mine</ttH><br><br>' + sandstone_ore, { maxWidth: 500 });
LumbyMine1 = L.marker([-19.559790136497412, 92.43415832519533], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: '../images/crystal_pickaxe.png' }) }).bindPopup('<ttH>Lumbridge Mine 1</ttH><br><br>' + iron_ore + coal_ore , { maxWidth: 500 });
LumbyMine2 = L.marker([-19.31114335506464, 81.84333801269533], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: '../images/crystal_pickaxe.png' }) }).bindPopup('<ttH>Lumbridge Mine 2</ttH><br><br>' + iron_ore + coal_ore, { maxWidth: 500 });
ArdyMine = L.marker([4.3464112753331925, 23.132400512695316], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: '../images/crystal_pickaxe.png' }) }).bindPopup('<ttH>Ardougne Mine</ttH><br><br>' + iron_ore, { maxWidth: 500 });
VarrockMine1 = L.marker([9.260713181867581, 85.72837829589845], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: '../images/crystal_pickaxe.png' }) }).bindPopup('<ttH>Varrock Mine 1</ttH><br><br>' + iron_ore + silver_ore + coal_ore, { maxWidth: 500 });
VarrockMine2 = L.marker([8.696426643238569, 99.65904235839845], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: '../images/crystal_pickaxe.png' }) }).bindPopup('<ttH>Varrock Mine 2 </ttH><br><br>' + iron_ore , { maxWidth: 500 });
IsafdarMine = L.marker([-17.895114303749143, -32.941818237304695], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: '../images/crystal_pickaxe.png' }) }).bindPopup('<ttH>Isafdar Mine</ttH><br><br>' + adamant_ore, { maxWidth: 500 });
DwarvenMine = L.marker([19.642587534013032, 64.66072082519533], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: '../images/crystal_pickaxe.png' }) }).bindPopup('<ttH>Dwarven Mine</ttH><br><br>' + iron_ore + gold_ore + silver_ore + adamant_ore + runite_ore, { maxWidth: 500 });
var miningMarkers = L.layerGroup([AlKharidMine, BanditQuarryMine, LumbyMine1, LumbyMine2, ArdyMine, VarrockMine1, VarrockMine2, IsafdarMine, DwarvenMine]);



castleWarTeakTree = L.marker([-31.253900198429022, -25.409317016601566], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: '../images/Tree.png' }) }).bindPopup('<ttH>Castle Wars Teak Tree</ttH><br><br>' , { maxWidth: 500 });
camelotMagicTree = L.marker([13.025965926333539, 23.527908325195316], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: '../images/Tree.png' }) }).bindPopup('<ttH>Camelot Magic Tree</ttH><br><br>' , { maxWidth: 500 });
alkharidMagicTree = L.marker([1.5818302639606454, 110.67146301269533], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: '../images/Tree.png' }) }).bindPopup('<ttH>Al-Kharid Magic Training Arena Magic Tree</ttH><br><br>', { maxWidth: 500 });
apeAtollTeakTree = L.marker([-61.897577621605016, 32.58064270019532], { icon: L.icon({ popupAnchor: [0, -16], iconAnchor: [16, 16], iconUrl: '../images/Tree.png' }) }).bindPopup('<ttH>This is the Ape Atoll Teak Tree</ttH><br><br>', { maxWidth: 500 });

var woodcuttingMarkers = L.layerGroup([castleWarTeakTree, camelotMagicTree, alkharidMagicTree, apeAtollTeakTree]);




var overlayMaps = {
    "Standard Spellbook Teleports": StandardMarkers,
    "Lunar Spellbook Teleports": lunarsMarkers,
    "Fairy Ring Locations": fairyRingMarkers,
    "Mining Locations": miningMarkers,
    "Woodcutting Locations": woodcuttingMarkers
    
};


L.control.layers(null, overlayMaps).addTo(map);

map.on('click', function (e) {
    lat = e.latlng.lat;
    lon = e.latlng.lng;
    console.log(lat + "," + lon);
    var marker2 = new L.marker(e.latlng).addTo(map);
});




