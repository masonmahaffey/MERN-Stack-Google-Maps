
class City{
  constructor(yearRank,city,state,yearEstimate,lastCensus,change,landArea,landAreaInKm,lastPopDensity,lastPopDensityInKM,latLon){
      this.yearRank = yearRank;
      this.city = city;
      this.state = state;
      this.yearEstimate = yearEstimate;
      this.lastCensus = lastCensus;
      this.change = change;
      this.landArea = landArea;
      this.lastPopDensity = lastPopDensity;
      let latLonArray = latLon.split(",");    
      this.lat = Number(latLonArray[0]);
      this.lon = Number(latLonArray[1]);
      this.latLon = latLon;
  }
  displayInfo(){
    console.log(`${this.city} is ${this.yearRank} in population`)
  }
}

var cities = [];
cities.push(new City ("1","New York","New York","8,491,079","8,175,133","+3.86%","302.6 sq mi","783.8 km2","27,012 per sq mi","10,430 km−2","40.6643,-73.9385"));
cities.push(new City ("2","Los Angeles","California","3,928,864","3,792,621","+3.59%","468.7 sq mi","1,213.9 km2","8,092 per sq mi","3,124 km−2","34.0194,-118.4108"));
cities.push(new City ("3","Chicago","Illinois","2,722,389","2,695,598","+0.99%","227.6 sq mi","589.6 km2","11,842 per sq mi","4,572 km−2","41.8376,-87.6818"));
cities.push(new City ("4","Houston","Texas","2,239,558","2,100,263","+6.63%","599.6 sq mi","1,552.9 km2","3,501 per sq mi","1,352 km−2","29.7805,-95.3863"));
cities.push(new City ("5","Philadelphia","Pennsylvania","1,560,297","1,526,006","+2.25%","134.1 sq mi","347.3 km2","11,379 per sq mi","4,394 km−2","40.0094,-75.1333"));
cities.push(new City ("6","Phoenix","Arizona","1,537,058","1,445,632","+6.32%","516.7 sq mi","1,338.3 km2","2,798 per sq mi","1,080 km−2","33.5722,-112.0880"));
cities.push(new City ("7","San Antonio","Texas","1,436,697","1,327,407","+8.23%","460.9 sq mi","1,193.8 km2","2,880 per sq mi","1,112 km−2","29.4724,-98.5251"));
cities.push(new City ("8","San Diego","California","1,381,069","1,307,402","+5.63%","325.2 sq mi","842.2 km2","4,020 per sq mi","1,552 km−2","32.8153,-117.1350"));
cities.push(new City ("9","Dallas","Texas","1,281,047","1,197,816","+6.95%","340.5 sq mi","881.9 km2","3,518 per sq mi","1,358 km−2","32.7757,-96.7967"));
cities.push(new City ("10","San Jose","California","1,015,785","945,942","+7.38%","176.6 sq mi","457.3 km2","5,359 per sq mi","2,069 km−2","37.2969,-121.8193"));
cities.push(new City ("11","Austin","Texas","912,791","790,390","+15.49%","322.48 sq mi","835.2 km2","2,653 per sq mi","1,024 km−2","30.3072,-97.7560"));
cities.push(new City ("12","Jacksonville","Florida","853,382","821,784","+3.85%","747.0 sq mi","1,934.7 km2","1,120 per sq mi","433 km−2","30.3370,-81.6613"));
cities.push(new City ("13","San Francisco","California","852,469","805,235","+5.87%","46.9 sq mi","121.4 km2","17,179 per sq mi","6,633 km−2","37.7751,-122.4193"));
cities.push(new City ("14","Indianapolis","Indiana","848,788","820,445","+3.45%","361.4 sq mi","936.1 km2","2,270 per sq mi","876 km−2","39.7767,-86.1459"));
cities.push(new City ("15","Columbus","Ohio","835,957","787,033","+6.22%","217.2 sq mi","562.5 km2","3,624 per sq mi","1,399 km−2","39.9848,-82.9850"));
cities.push(new City ("16","Fort Worth","Texas","812,238","741,206","+9.58%","339.8 sq mi","880.1 km2","2,181 per sq mi","842 km−2","32.7795,-97.3463"));
cities.push(new City ("17","Charlotte","North Carolina","809,958","731,424","+10.74%","297.7 sq mi","771.0 km2","2,457 per sq mi","949 km−2","35.2087,-80.8307"));
cities.push(new City ("18","Detroit","Michigan","680,250","713,777","−4.70%","138.8 sq mi","359.4 km2","5,144 per sq mi","1,986 km−2","42.3830,-83.1022"));
cities.push(new City ("19","El Paso","Texas","679,036","649,121","+4.61%","255.2 sq mi","661.1 km2","2,543 per sq mi","982 km−2","31.8484,-106.4270"));
cities.push(new City ("20","Seattle","Washington","668,342","608,660","+9.81%","83.9 sq mi","217.4 km2","7,251 per sq mi","2,800 km−2","47.6205,-122.3509"));
cities.push(new City ("21","Denver","Colorado","663,862","600,158","+10.61%","153.0 sq mi","396.3 km2","3,923 per sq mi","1,515 km−2","39.7618,-104.8806"));
cities.push(new City ("22","Washington","District of Columbia","658,893","601,723","+9.50%","61.0 sq mi","158.1 km2","9,856 per sq mi","3,806 km−2","38.9041,-77.0171"));
cities.push(new City ("23","Memphis","Tennessee","656,861","646,889","+1.54%","315.1 sq mi","816.0 km2","2,053 per sq mi","793 km−2","35.1035,-89.9785"));
cities.push(new City ("24","Boston","Massachusetts","655,884","617,594","+6.20%","48.3 sq mi","125.0 km2","12,793 per sq mi","4,939 km−2","42.3320,-71.0202"));
cities.push(new City ("25","Nashville","Tennessee","644,014","601,222","+7.12%","475.1 sq mi","1,230.8 km2","1,265 per sq mi","489 km−2","36.1718,-86.7850"));
cities.push(new City ("26","Baltimore","Maryland","622,793","620,961","+0.30%","80.9 sq mi","209.6 km2","7,672 per sq mi","2,962 km−2","39.3002,-76.6105"));
cities.push(new City ("27","Oklahoma City","Oklahoma","620,602","579,999","+7.00%","606.4 sq mi","1,570.6 km2","956 per sq mi","369 km−2","35.4671,-97.5137"));
cities.push(new City ("28","Portland","Oregon","619,360","583,776","+6.10%","133.4 sq mi","345.6 km2","4,375 per sq mi","1,689 km−2","45.5370,-122.6500"));
cities.push(new City ("29","Las Vegas","Nevada","613,599","583,756","+5.11%","135.8 sq mi","351.8 km2","4,298 per sq mi","1,660 km−2","36.2277,-115.2640"));
cities.push(new City ("30","Louisville","Kentucky","612,780","597,337","+2.59%","325.2 sq mi","842.4 km2","1,837 per sq mi","709 km−2","38.1781,-85.6667"));
cities.push(new City ("31","Milwaukee","Wisconsin","599,642","594,833","+0.81%","96.1 sq mi","249.0 km2","6,188 per sq mi","2,389 km−2","43.0633,-87.9667"));
cities.push(new City ("32","Albuquerque","New Mexico","557,169","545,852","+2.07%","187.7 sq mi","486.2 km2","2,908 per sq mi","1,123 km−2","35.1056,-106.6474"));
cities.push(new City ("33","Tucson","Arizona","527,972","520,116","+1.51%","226.7 sq mi","587.2 km2","2,294 per sq mi","886 km−2","32.1543,-110.8711"));
cities.push(new City ("34","Fresno","California","515,986","494,665","+4.31%","113.2 sq mi","293.2 km2","4,418 per sq mi","1,706 km−2","36.7827,-119.7945"));
cities.push(new City ("35","Sacramento","California","485,199","466,488","+4.01%","97.9 sq mi","253.6 km2","4,764 per sq mi","1,839 km−2","38.5666,-121.4686"));
cities.push(new City ("36","Long Beach","California","473,577","462,257","+2.45%","50.3 sq mi","130.3 km2","9,191 per sq mi","3,549 km−2","33.8091,-118.1553"));
cities.push(new City ("37","Kansas City","Missouri","470,800","459,787","+2.40%","315.0 sq mi","815.7 km2","1,460 per sq mi","564 km−2","39.1252,-94.5511"));
cities.push(new City ("38","Mesa","Arizona","464,704","439,041","+5.85%","136.5 sq mi","353.4 km2","3,218 per sq mi","1,242 km−2","33.4019,-111.7174"));
cities.push(new City ("39","Atlanta","Georgia","456,002","420,003","+8.57%","133.2 sq mi","344.9 km2","3,154 per sq mi","1,218 km−2","33.7629,-84.4227"));


// console.log(cities);