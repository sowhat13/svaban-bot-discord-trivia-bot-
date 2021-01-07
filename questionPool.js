const axios = require("axios");

// const movies = async function() {
//     const res = await axios.get(
//       "https://api.themoviedb.org/3/movie/top_rated?api_key=cffed36e338abe3170a6f5872e6b2de6&language=tr-TR&page=1"
//     );
//    this.movie = res.data.results;

//   }

//   const getMovies = async () => {
//     try {
//         const res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=cffed36e338abe3170a6f5872e6b2de6&language=tr-TR&page=20');
//        const movies = res.data.results

//        if(movies){
//         const popMovies = movies.filter(movie => movie.vote_count > 3000)

//      let questionMovies =  popMovies.map(movie => {return {question:'Görseldeki filmin adı nedir?', photo: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`, answer: movie.title}})

//      console.log( questionMovies)

//     }

//     } catch (err) {
//         // Handle Error Here
//         console.error(err);
//     }

// };

// getMovies()

let results = [
  {
    question: " 2002 FIFA dünya kupası şampiyonu hangi ülkedir?",
    answer: "Brezilya",
  },
  {
    question: "Görseldeki filmin adı nedir?",
    photo:
      "https://image.tmdb.org/t/p/original/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg",
    answer: "Esaretin Bedeli",
  },
  {
    question: "Görseldeki filmin adı nedir?",
    photo:
      "https://image.tmdb.org/t/p/original/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
    answer: "Baba",
  },
  {
    question: "Görseldeki filmin adı nedir?",
    photo:
      "https://image.tmdb.org/t/p/original/loRmRzQXZeqG78TqZuyvSlEQfZb.jpg",
    answer: "Schindler'in Listesi",
  },

  {
    question: "Görseldeki filmin adı nedir?",
    photo:
      "https://image.tmdb.org/t/p/original/poec6RqOKY9iSiIUmfyfPfiLtvB.jpg",
    answer: "Baba 2",
  },
  {
    question: "Görseldeki filmin adı nedir?",
    photo:
      "https://image.tmdb.org/t/p/original/mSDsSDwaP3E7dEfUPWy4J0djt4O.jpg",
    answer: "Ruhların Kaçışı",
  },
  {
    question: "Görseldeki filmin adı nedir?",
    photo:
      "https://image.tmdb.org/t/p/original/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg",
    answer: "Parazit",
  },
  {
    question: "Görseldeki filmin adı nedir?",
    photo:
      "https://image.tmdb.org/t/p/original/xMIyotorUv2Yz7zpQz2QYc8wkWB.jpg",
    answer: "Yeşil Yol",
  },
  {
    question: "Görseldeki filmin adı nedir?",
    photo:
      "https://image.tmdb.org/t/p/original/w7RDIgQM6bLT7JXtH4iUQd3Iwxm.jpg",
    answer: "Ucuz Roman",
  },
  {
    question: "Görseldeki filmin adı nedir?",
    photo:
      "https://image.tmdb.org/t/p/original/6aNKD81RHR1DqUUa8kOZ1TBY1Lp.jpg",
    answer: "Hayat Güzeldir",
  },
  {
    question: "Görseldeki filmin adı nedir?",
    photo:
      "https://image.tmdb.org/t/p/original/lXhgCODAbBXL5buk9yEmTpOoOgR.jpg",
    answer: "Yüzüklerin Efendisi",
  },
  {
    question: "Görseldeki filmin adı nedir?",
    photo:
      "https://image.tmdb.org/t/p/original/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg",
    answer: "Kara Şövalye",
  },
  {
    question: "Görseldeki filmin adı nedir?",
    photo:
      "https://image.tmdb.org/t/p/original/tlEFuIlaxRPXIYVHXbOSAMCfWqk.jpg",
    answer: "Forrest Gump",
  },
  {
    question: "Görseldeki filmin adı nedir?",
    photo:
      "https://image.tmdb.org/t/p/original/rO4pfAIIrt3N905wTTe2HrH3uUv.jpg",
    answer: "Bir Zamanlar Amerika",
  },
  {
    question: "Görseldeki filmin adı nedir?",
    photo:
      "https://image.tmdb.org/t/p/original/qqHQsStV6exghCM7zbObuYBiYxw.jpg",
    answer: "12 Kızgın Adam",
  },
  {
    question: "Görseldeki filmin adı nedir?",
    photo:
      "https://image.tmdb.org/t/p/original/chrngg9mjM6tSU3BF9VHITgn1Ke.jpg",
    answer: "Sıkı Dostlar",
  },
  {
    question: "Görseldeki filmin adı nedir?",
    photo:
      "https://image.tmdb.org/t/p/original/x4biAVdPVCghBlsVIzB6NmbghIz.jpg",
    answer: "İyi, Kötü ve Çirkin",
  },
  {
    question: "Görseldeki filmin adı nedir?",
    photo:
      "https://image.tmdb.org/t/p/original/kZGaVeXSkkvrpMYvD97sxHj291k.jpg",
    answer: "Sapık",
  },
  {
    question: "Görseldeki filmin adı nedir?",
    photo:
      "https://image.tmdb.org/t/p/original/52AfXWuXCHn3UjD17rBruA9f5qb.jpg",
    answer: "Dövüş Kulübü",
  },
  {
    question: "Görseldeki filmin adı nedir?",
    photo:
      "https://image.tmdb.org/t/p/original/3KwAmIKMaDcBMonF5wmyNTL0SR6.jpg",
    answer: "Guguk Kuşu",
  },
  {
    question: "Görseldeki filmin adı nedir?",
    photo:
      "https://image.tmdb.org/t/p/original/194dso1hBwQEgIU3fgS7mXHtFAj.jpg",
    answer: "Tanrıkent",
  },
  {
    question: "Görseldeki filmin adı nedir?",
    photo:
      "https://image.tmdb.org/t/p/original/aUVCJ0HkcJIBrTJYPnTXta8h9Co.jpg",
    answer: "Örümcek-Adam: Örümcek Evreninde",
  },

  {
    question: "2017/2018 Şampiyonlar Ligi şampiyonu hangi takımdır?",
    answer: "Real madrid",
  },
  {
    question: "Premier lig tarihinde en çok gol atan oyuncu kimdir?",
    answer: "Alan Shearer",
  },
  {
    question: "Carlos Tevez hangi takımda oynamaktadır?",
    answer: "Boca Juniors",
  },
  {
    question: "Cristiano Ronaldo'nun kaç Şampiyonlar Ligi kupası vardır?",
    answer: "5",
  },
  {
    question: "İlk Avrupa Kupası şampiyonu kimdir?",
    answer: "Sovyetler Birliği",
  },
  {
    question: "Nba tarihinde, bir sezonda en çok galibiyet alan takım? ",
    answer: "Golden State Warriors",
  },
  {
    question: "Nba'de en genç yaşta MVP seçilen oyuncu kimdir?",
    answer: "Derick Rose",
  },
  {
    question:
      "Türkiye milli basketbol takımı hangi yıl avrupa şampiyonasında ikincilik yaşamıştır?",
    answer: "2017",
  },
  {
    question: "Dünyanın düz olduğuna inanan ünlü Nba oyuncusu kimdir?",
    answer: "Kyrie irving",
  },
  {
    question: "İlk şampiyonlar ligi kazanan takım hangisidir?",
    answer: "Real Madrid",
  },
  {
    question:
      "Şampiyonlar liginde altı farklı takımla golü bulunan oyuncu kimdir?",
    answer: "Zlatan ibrahimovic",
  },
  {
    question: "Şampiyonlar liginde en çok gol atan Afrikalı oyuncu kimdir?",
    answer: "Didier Drogba",
  },

  {
    question: "Premier ligte en çok şampiyon olan ikinci takım?",
    answer: "Chelsea",
  },
  {
    question: "Frank Lampard hangi takımda futbolu bırakmıştır?",
    answer: "New York City",
  },
  {
    question: "Kültürün daimi savunucusu kimdir?",
    answer: "Joker",
  },

  {
    question: "Akman Sofuoğlu'nun en sevdiği futbolcu kimdir? ",
    answer: "Heung-min Son",
  },
  {
    question:
      "Son zamanlarda golf sporuyla ilgili açıklamalarıyla sık sık gündeme gelen futbolcu kimdir?",
    answer: "Gareth Bale",
  },

  {
    question:
      "Fabrika işçiliğinden, Premier lig şampiyonluğuna uzanan bir kariyere sahip olan oyuncu kimdir?",
    answer: "Jamie Vardy",
  },
  {
    question: "League Of Legends'de ilk dünya şampiyonu olan takım hangisidir?",
    answer: "Fnatic",
  },
  {
    question:
      "Beşiktaş'ın son şampiyonluğunda, teknik direktörü kimdi? (Spoiler içerir)",
    answer: "Sergen Yalçın",
  },
  {
    question: "CS:GO oyunundaki en pahalı silah nedir?",
    answer: "M249",
  },
  {
    question: `Bu dizi karakterinin adı nedir?`,
    photo: `https://pbs.twimg.com/profile_images/1304853210360942597/fjUwHo1r.jpg`,
    answer: "Behzat Ç.",
  },
  {
    question: `Bu karakter hangi oyunun baş kahramanıdır?`,
    photo: `https://img-s1.onedio.com/id-5712070ca1654e0223e90ce6/rev-0/w-635/listing/f-jpg-webp/s-80839ec710547558f0841dbc77317b4394c117cc.webp`,
    answer: "GTA Vice City",
  },
  {
    question: `Görseldeki karakterler hangi oyuna aittir`,
    photo: `https://img-s1.onedio.com/id-57120d3c3adae32f311690b4/rev-0/w-635/listing/f-jpg-webp/s-c0c87ec32a91258ed9729e3f90c540440d21051a.webp`,
    answer: "Left 4 Dead",
  },
  {
    question: `En başta bir Half-Life modu olarak tasarlanan, daha sonrasında kendi başına en çok oynanan oyunlardan biri olan oyunun adı nedir?`,
    answer: "Counter Strike",
  },
  {
    question: `Görseldeki futbolcunun adı nedir?`,
    photo: `https://4.bp.blogspot.com/-7vXsthcYYg4/UgwSCmf5z-I/AAAAAAAABNQ/g4JzSAv0brc/s1600/arshavin.jpg`,
    answer: "Andrey Arshavin",
  },
  {
    question: `Görseldeki futbolcunun adı nedir?`,
    photo: `https://upload.wikimedia.org/wikipedia/commons/f/f3/U10_Diego_Forl%C3%A1n_7524.jpg`,
    answer: "Diego Forlan",
  },

  {
    question: `Görseldeki World Of Warcraft III modunun adı nedir?`,
    photo: `https://media.moddb.com/images/mods/1/33/32696/dota1.png`,
    answer: "Dota",
  },
  {
    question: `Görseldeki oyun karakterinin adı?`,
    photo: `https://tr-wiki.metin2.gameforge.com/images/thumb/7/7c/Yabani_K%C3%B6pek.png/180px-Yabani_K%C3%B6pek.png`,
    answer: "Yabani Köpek",
  },
  {
    question: `Fatih Sultan Mehmet’in babası kimdir?`,
    answer: "2. Murat",
  },

  {
    question: `Magna Carta hangi ülkenin kralıyla yapılmış bir sözleşmedir?`,
    answer: "İngiltere",
  },

  {
    question: `Kıbrıs Barış harekatı hangi tarihte gerçekleşmiştir?`,
    answer: "1974",
  },
  {
    question: `ABD'nin ilk başkanı kimdir?`,
    answer: "George Washington",
  },
  {
    question: `Muhteşem Yüzyıl dizisinde, Hürrem karakterini canlandıran oyuncunun adı nedir? :heart:`,
    answer: "Meryem Uzerli",
  },
  {
    question: `Ankara'nın, Bahçelievler ilçesinde, Vakıfbank'ın önünde dayak yiyen kişinin adı nedir?`,
    answer: "Ogün Kalemci",
  },
  {
    question: `Bu tablo kime aittir?`,
    photo: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg/700px-The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg`,
    answer: "Leonardo Da Vinci",
  },
  {
    question: `Bir dönem Pelé, Franz Beckenbauer, Carlos Alberto ve Yasin Özdenak ‘ın da oynadığı ABD futbol takımı hangisidir? `,
    answer: "New York Cosmos",
  },
  {
    question: `Osmanlı İmparatorluğu yaklaşık kac asır hüküm sürmüştür?`,
    answer: "6",
  },
  {
    question: `Bu bayrak hangi ülkeye aittir?`,
    photo:
      "https://cdn.countryflags.com/thumbs/jamaica/flag-400.png",
    answer: "Jamaika",
  },
  {
    question: `Bu neyin amblemidir?`,
    answer: "NATO",
    photo:
      "https://foto.haberler.com/haber/2020/02/28/nato-nedir-nato-uyeleri-kimler-nato-4-madde-12963371_6570_amp.jpg",
  },
  {
    question: `Bu neyin amblemidir?`,
    answer: "Avrupa Birliği",
    photo: "https://ab-ilan.com/wp-content/uploads/2019/08/AB-Bayragi.jpg",
  },
  {
    question: `1 metre kaç milimetredir?`,
    answer: "1000",
  },
  {
    question: `Birleşik Krallık'ın Avrupa Birliği'nden çıkış süreciyle ilgili kısaltma nedir?`,
    answer: "Brexit",
  },
  {
    question: `2016-17 sezonu NBA şampiyonu hangi takım olmuştur?`,
    answer: "Golden State Warriors",
  },
  {
    question: `1963 yılında Washington DC'de yapılan bir eylemde söylenmiş, meşhur "I Have a Dream" cümlesinin sahibi kimdir?`,
    answer: "Martin Luther King",
  },
  {
    question: `ABD'nin en büyük eyaleti hangisidir?`,
    answer: "Alaska",
  },
  {
    question: `İsviçre'nin başkenti neresidir?`,
    answer: "Bern",
  },
  {
    question: `Fotoğraftaki karakterin okuduğu üniversite bölümünün adı nedir?`,
    answer: "Bilişim Sistemleri",
    photo:
      "https://scontent.fist6-1.fna.fbcdn.net/v/t1.0-9/12472269_908638289251142_5811274199198502938_n.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=QfD8z7U2tyYAX-mszmW&_nc_ht=scontent.fist6-1.fna&oh=59374c7b9cfeacb58bbd3493a7c11e5a&oe=601CDD0C",
  },
  {
    question: `Meşhur 'Yıldızlı Gece' tablosunu kim çizmiştir?`,
    answer: "Vincent van Gogh",
  },
  {
    photo: `https://birsanatbirkitap.com/wp-content/uploads/2019/01/pablo_picasso_guernica_tablosu-800x416.jpg`,
    question: "Bu resmi kim çizmiştir?",
answer:'Pablo Picasso'
  },
  {
    question: `Pisa kulesi hangi şehirdedir?`,
    answer: "Pisa",
  },
  {
    question: `329 x 32 = ?`,
    answer: "10528",
  },
  {
    question: `Bilinen en eski din nedir?`,
    answer: "Hinduizm",
  },
  {
    question: `Hitler nerelidir?`,
    answer: "Avusturya",
  },
  {
    question: `Dünyanın en zevkli oyunu hangisidir?`,
    answer: "South Park",
  },
  {
    question: `Seni benden başka seven oldu mu?`,
    answer: "Hayır",
  },
  {
    question: `Penguenler hangi kutupta yaşamaktadır?`,
    answer: "Güney",
  },
  {
    question: `Bu botun discord etiketi kaçtır?`,
    answer: "4595",
  },
  {
    question: `Uşak ilinin plaka numarası kaçtır?`,
    answer: "64",
  },

  {
    question: `Chris Paul kaç cmdir?`,
    answer: "185",
  },
  {
    question: `Michael Jordan, 1984 Nba draftlarında kaçıncı sıradan seçilmiştir?`,
    answer: "3",
  },
  {
    question: `League of legends ilk çıktığında kaç şampiyon vardı?`,
    answer: "40",
  },
  {
    question: `Aphelios'un ultisinin adı nedir?`,
    answer: "Ay Işığı Nöbeti",
  },
  {
    question: `Bard'ın ultisinin adı nedir?`,
    answer: "Kader Birliği",
  },
  {
    question: `Lee Sin'in ultisinin adı nedir?`,
    answer: "Ejderhanın Gazabı",
  },
  {
    question: `Varus'un ultisinin adı nedir?`,
    answer: "Musibet Zinciri",
  },
  {
    question: `Türkiye'nin en kalabalık ilçesi neresidir?`,
    answer: "Çankaya",
  },
  {
    question: `Sabah namazı kaç rekattır?`,
    answer: "4",
  },
  {
    question: `Bir sene kaç saattir?`,
    answer: "8765",
  },
  {
    question: `Türkiye'nin kaç komşu ülkesi vardır?`,
    answer: "10",
  },
  {
    question: `Antalyaspor hangi yıl kurulmuştur?`,
    answer: "1966",
  },
  {
    question: `Pierre-Emerick Aubameyang hangi ülkede doğmuştur?`,
    answer: "Fransa",
  },
  {
    question: `Pierre-Emerick Aubameyang hangi milli takımda oynamaktadır?`,
    answer: "Gabon",
  },
  {
    question: `Arsenal tarihinde en çok gol atan oyuncu kimdir?`,
    answer: "Thierry Henry",
  },
  {
    question: `Fransa futbol liginde en çok şampiyonluk yaşayan takım?`,
    answer: "Saint-Etienne",
  },
  {
    question: `Zlatan Ibrahimović'in profesyonel futbolculuğa başladığı takım?`,
    answer: "Malmö",
  },
  {
    question: "Tarihte bilinen ilk yazılı antlaşma hangisidir ?",
    answer: "Kadeş",
  },
{
    question: "Letonyanın başkenti neresidir?",
    answer: "Riga",
  },
{
    question: " Fenerbahçe 2007-2008 sezonunda şampiyonlar liginde gruptan kaç puanla çıkmıştır?",
    answer: "11",
  },
{
    question: " 2000-2001 sezonu Galatasaraya transfer olan Mario Jardel toplam 43 maçta kaç gol atmıştır?",
    answer: "34",
  },
{
    question: " Türkiye kupasını ilk kez kazanan anadolu takımı hangisidir?",
    answer: "Altay",
  },
{
    question: " Fatih Sultan Mehmet kaç yaşında vefat etmiştir?",
    answer: "49",
  },
{
    question: " Türkler Anadoluya ilk kez hangi savaşla ayak basmıştır?",
    answer: "Malazgirt Savaşı",
  },
{
    question: " İrlanda Cumhuriyetinin başkenti nedir?",
    answer: "Dublin",
  },
{
    question: " Tarihte ilk Türkçe sözlük olarak bilinen Dîvânu Lugâti't-Türkün yazarı kimdir?",
    answer: "Kaşgarlı Mahmud",
  },
{
    question: " Türk tarihinin en büyük deniz savaşı olan Preveze Deniz Savaşı hangi padişah döneminde yapılmıştır?",
    answer: "Kanuni Sultan Süleyman",
  },
{
    question: " San Marinonu başkenti nedir?",
    answer: "San Marino",
  },
{
    question: " Hüseyin Can Canbay İngilterede eksik kadro kaldığı için hangi ırktan oyuncuyu Türk kontenjanında oynatmıştır?",
    answer: "Arap",
  },
{
    question: " Alişan Kazanın en sevmediği alkollü içecek hangisidir?",
    answer: "Bira",
  },
{
    question: " Hüseyin Can Canbayın anneannesinin adı nedir?",
    answer: "Yaşar",
  },
{
    question: " Türkiyede harf devrimi hangi yıl yapılmıştır?",
    answer: "1928",
  },
{
    question: " Yılmaz Vural 2012-2013 yılları arasında hangi takımı çalıştırmıştır?",
    answer: "Elazığspor",
  },
  {
    question: " 13 ün karesi kaç eder?",
    answer: "169",
  },
  {
    question: " Tarihte bilinen ilk yazılı antlaşma hangisidir?",
    answer: "Brezilya",
  },

];



module.exports = results;
