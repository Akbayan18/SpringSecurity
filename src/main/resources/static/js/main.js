var users = 0;
for(i=1;i>0;i++){
  if(localStorage.getItem(i).length>0){
      users=i;
  }
  else break;
}
function RegistrationPage() {
 
  var result = true;
  var a = document.forms.RegistrationPage.email.value,
      b = document.forms.RegistrationPage.username.value,
      c = document.forms.RegistrationPage.password.value,
      d = document.forms.RegistrationPage.repassword.value;
      f = document.forms.RegistrationPage.phone.value;

  //write code to declare variables for password and re-password(confermed password)

  // expressions for the correct entering email address, username and password validations
  var email_v = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  var username_v = /^[a-zA-Z0-9_-]+$/;
  var password_v =  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  var repassword_v = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

  // define email message, username message, password_message and repassword_message


  // if email is left empty/email format is wrong, error message displays information in red color
  if (a == null || a == "" || email_v.test(a) == false) {
      document.getElementById("email_message").innerHTML = "Email address empty or wrong format";
      result = false;
  }

  // write code here for username validation
  
  if (b == null || b == "" || username_v.test(b) == false) {
      document.getElementById("username_message").innerHTML = "Please enter the correct information";
      result = false;
  }

  //write code here for password validation form
  if(c.length<8){
    document.getElementById("password_message").innerHTML = "Please enter the correct password";
    result=false;
  }

  if(d.length<8||c!==d){
    document.getElementById("repassword_message").innerHTML = "Please enter the correct password";
    result=false;
  }

  // Infomation about user is dissplayed on the buttom if correct information is entered.
  if (result == true) {
      users++;
      var user = {Email: a, Name: b, Password: c, enable: true, phone_number: f};
      localStorage.setItem(users, JSON.stringify(user));
      document.getElementById("logged").innerHTML = "";
      document.getElementById("loggeda").style = "display: none";
      document.getElementById("logout").innerHTML = "Log out "+ JSON.parse(localStorage.getItem(users)).Name;
      document.getElementById("logoutbut").style = "display: flex";
      document.getElementById("email_message").innerHTML = "";
      document.getElementById("repassword_message").innerHTML = "";
      document.getElementById("password_message").innerHTML = "";
      document.getElementById("username_message").innerHTML = "";
      document.getElementById("sign_in_inf").innerHTML = "You are logged";
      document.getElementById("sign_in_inf").style = "color: green";
  }
}
document.getElementById("logged").innerHTML = "works";

function ResetForm() {

}


function LogIn(){
    var log_em = document.getElementById("login_emial").value;
    var log_pass = document.getElementById("login_password").value;
    for(i=1;i>0;i++){
      if(localStorage.getItem(i).length>0){
        if(log_em==JSON.parse(localStorage.getItem(i)).Email&&log_pass==JSON.parse(localStorage.getItem(i)).Password){
          if(JSON.parse(localStorage.getItem(i)).enable==true){
            document.getElementById("logged").innerHTML =""
            document.getElementById("incorrect").innerHTML = "You are logged";
            document.getElementById("incorrect").style = "color: green";
            document.getElementById("loggeda").style ="display: none";
            document.getElementById("logout").innerHTML = "Log out "+ JSON.parse(localStorage.getItem(i)).Name;
            document.getElementById("logoutbut").style = "display: flex";
            break;
          }
          else{
            document.getElementById("incorrect").innerHTML = "You are not allowed to login";
          }
        }
        else{
          document.getElementById("incorrect").innerHTML = "Login or password are not correct";
        }
      }
      else break;
    }
}

function ResetForm() {

}
function LogOut(){
  document.getElementById("logout").innerHTML = "";
  document.getElementById("logged").innerHTML = "Log in/Sign in";
  document.getElementById("logoutbut").style = "display: none";
  document.getElementById("loggeda").style ="display: flex; border: none; background-color: white";
}



function Add_Comment(){
  var tst =document.getElementById("logout").value;
  for(i=1;i>0;i++){
    if(localStorage.getItem(i).length>0){
      if(tst=="Log out "+JSON.parse(localStorage.getItem(i)).Name){
        var Comment = JSON.parse(localStorage.getItem(i)).Name +"<br>"+document.getElementById("comment").value;
        var com_section = document.getElementById("comment_section");
        let ab = document.createElement("p");
        com_section.appendChild(ab);
        ab.textContent = Comment;
      }
      else{
        window.alert("You are not logged in. Please log in or sign in");
        break;
      }
    }
    else break;
  }
}

$(function () {

  $('.slider__inner, .news__slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false
  });

  $('select').styler();

  $('.header__btn-menu').on('click', function () {
    $('.menu ul').slideToggle();
  });

});

var input = document.querySelector('.pswrd');
var show = document.querySelector('.show');
show.addEventListener('click', active);

function active() {
  if (input.type === "password") {
    input.type = "text";
    show.style.color = "#1DA1F2";
    show.textContent = "HIDE";
  } else {
    input.type = "password";
    show.textContent = "SHOW";
    show.style.color = "#111";
  }
}

var imgtext = document.getElementById("img_main_text")
let arr = [{
    img: document.getElementById("image1"),
    text: "Нұхтың кемесі Қазығұртқа тоқтағанда, жылан келіп: - Уа, Нұх, кеменің тышқан тескен тесігін құйрығыммен бітедім. Сол кезде менің ризығымды тауып беремін деп уәде бергенсің. Уәдеңді орында! - дейді. Пайғамбар келіседі. Жылан ризық іздеуге масаны жұмсайды. Жәндік зуылдап ұша жөнеледі. Барлық жануардың қанын сорып, тәтті азық іздейді. Ең соңында бесікте жатқан Нұхтың немересінің бетіне қонады. Қанын сорып еді, тәтті екен. Жыланға хабарлауға асығады. Сол сәтте Тәңірі тағала қарлығашқа бұйырып - Масаның жолын тұт! Менің пайғамбарыма Зияны тимесін! - дейді. Ол кезде қарлығаш пейішті мекендейтін құс еді.Ә, дегенше, қарлығаш масаның алдынан шығады. Ол заманда маса жыланның тісінен жаралғасын сөйлей алатын қасиеті бар еді. Қарлығаш: - Әу, маса ең тәтті қан ненікі?--деп сұрайды -Адамдікі,-дейді маса. - Кәнекей, мен де дәмін татып көрейін! – дейді. Маса тілін шығарғаны сол еді, қарлығаш жұлып алады. Маса ызыңдап, сөйлей алмай қалады. Тілінен айрылып жыланға келді. Жылан: - Тәтті қанды таптың ба? – дейді. Маса ызыңдап айта алмайды. - Ненің қаны тәтті? – деп жылан екінші рет сұрайды. Сол кезде қарлығаш шыға келіп: - Мен әлгінде сұрағанда, құрбақа деп еді. Құрбақаның қаны тәтті,-дейді. Жылан бір нәрсенің болғанын сезді: -Ендеше маса неге сөйлей алмай қалды?-дейді. Қарлығаш: - Ол қомағай екен. Тәттіге қуанып, өзінің тілін жұтып қойған, - дейді. Сол кезде Нұх пайғамбар қолын жайып: -Уа, Тәңірім, жыланның азығы етіп құрбақаны бере гөр!-деп дуға етеді. Жылан бурын пейіште мекендеген еді. Қарлығаштың денесінен пейіштің иісін сезіп қояды. Заматта оған тап береді. Қарлығаш жалт береді. Жылан оның құйрығынан тістеп, жұлып алады. Содан бастап қарлығаштың құйрығы айыр болып қалады. Нұх қарлығашқа риза болып: - Ұрпағымды жыланның азуынан сақтадың. Бұдан былай көктемнің жаршысы бол! Мамыражай мезгіл сенімен бірге келсін- деп, батасын береді. Содан бастап қарлығаш адамга жақын өмір сүріпті. «Қарлығаш қай үйге ұя салса, сол үйде береке болады» деп ырымдайды.",
    id: "image1"
  },
  {
    img: document.getElementById("image2"),
    text: "Мұхамбет пайғамбар Хира үңгіріне жиі келіп, құлшылық етіпті. Онда отырып Құран Кәрімді қирағаттап оқығанды ұнатыпты. Пайғамбар құран оқып отырғанда, табиғат құлаққа ұрғандай тып-тыныш бола қалады екен. Ол зманда Нұр тауын бір түлкі мекен етіпті. Ол пайғамбардың дидарына ғашық еді. Құранның қирағатын естігенде үңгірдің аузына келіп жатып алатын. Мұхамбет пайғамбар да түлкінің бұл сырын білетін еді. Үнемі тауға келгенде, түлкіге арнап тамақ әкелетін. Мүбәрак алақанымен оның басынан сипайтын. Түлкі де құйрығын бұлғаңдатып, оған еркелеп бауып басыпты. Сөйтіп түлкіге пайғамбардың шарапаты жұғады. Мүбәрак дүние салғанда, түлкі қатты қайғырып, адамша жылаған деседі. Пайғамбардың бейтіне келіп, оны сағынып, мөлейіп жататынды шығарады. Не ас жемейді, не су ішпейді. Ақ ры іш-құса болып сол жерде жан тапсырады. Бұл көріністі көргенде, Мәдинада жыламаған адам қалмапты. Сахабалар түлкіні арулап жерлеген екен. Содан бастап ел аузында «түлкіні нақақ өлтірме деген тыйм шығыпты. Бір қызығы, түлкілер әліге дейін Құранның не азанның дауысын естісе селт етпей тыңдайды екен.",
    id: "image2"
  },
  {
    img: document.getElementById("image3"),
    text: "Ертеде Ақтаңгер деген аңшы болыпты. Ол аң аулап күн көреді екен. Бірде бір көлге тап келеді. Көлден жалғыз аққуды көреді. Аққуды атпақшы болып, мылтығын кезей бергенде, періщтелер:  - Атпа!- деп айқайлайды. Аңшы кім айқайлағанын түсінбейді. Жан-жағына қараса, ешкім жоқ. «Қағыс естіген болармын» деп, тағы оқтала бергенде, «Атпа!» - деген дауыс шығады. Аңшы бұл жолы да кідіреді. Үшінші жолы шүріппені ол басып қалады. Періштелер мылтығын қағып жібереді. Оқ қисық ұшып, аққудың аяғына тиген екен. Аққу сұңұылдай ұшып көзден ғайып болады. Аңшы періштенің наласына ұшырайды. Қазақ арсында «Аққуды атпа» деген тыйым осыдан қалыпты.",
    id: "image3"
  },
  {
    img: document.getElementById("image4"),
    text: "Адам ата жерге түскенде, оның жүзін бір көруге күллі жануар ынтық болыпты. Солардың арасынан алғаш көрген ақбөкен екен. Адамды көру үшін Торғай даласынан Жида тауына тоқтамай шауып, жеті күнде жетіпті.	Адам ата мен Хауа ана тау етегіне отау тігіп, тіршілігін бастап жатыр еді. Ақбөкеннің тұяғы тасқа қажалып, шаршап-шалдығып ақ отауға жеткенде, сүрініп құлады. Адам оны көтеріп, үйіне әкелді. Аузына інжір жапырағын берді. Мейірленіп, тұмсығынан сипайды. Пайғамбардың аяулы алақаны тиген соң, киіктің тұмсығына сымбат бітті. Екі танауы желбіреп, көзі мөлдіреп шыға келді. Жауырынын саусағымен тарағанда, денесінен жұпар аңқыды. Тұяғына мүбәрак қолы тигенде, қасиет дарыды. Желден желгір болды. Мүйізіне мың бір дертке ем болатын қасиет қонды. Пайғамбардың алақаны беліне тиіп еді, ол да құдіретке толды. Буаз кезінде елігінің жынысын қалауына сай өзгерте алатын жануарға айналды.Киіктің арнайы келісіне риза болған Адам ата:– Жануарым, бұйымтайың болса айт! Тәңірден дұға тілеп, мұқтажыңды өтейін, – деді. Сонда ақбөкен:	– Төлдегенде құралайым шыбын-шіркейге жем болады. Одан қалса, қасқыр шабады. Даланың шөбі теліме ауырлық етіп, қоң жинай алмай қиналады. Осыған бір шара болса, – деді көзі мөлдіреп. Адам ата Жаппар Хаққа киіктің арызын жеткізді. Тілегі заматта қабыл болды. Соден бастап Құданың құдіретімен киік төлдеген кезде бетбақ далада шыбын-шіркейді шығартпас суық тұрады екен. Бұл – «Құралайдың салқыны» деп аталады. Сол аралықта қасқырдың да киікке деген тәбеті тыйылады. Құралайлар көшке ілескенше жақындай алмайды екен. Жас киікке арналған даладан түйетабан деген шөп шығады. Ол тек ақбөкен төлдер уақытта ғана көгеріп, лақтарына азық болады деседі. 	Ақбөкен Адам атаны көріп, қолынан жем жеп, мұраты орындалған соң Сары-Арқаға қайтпақшы болды. Сол кезде Адам ата оған: 	Сахараға сән болып, 	Құтпен кие, мән қонып,	Өсіп-өнсін нәсілің –	Бір Құдайым жар болып.	Аллам өзі қолдасын!	Бар бәледен қорғасын! 	Саған зауал келтірген	Арамзалар оңбасын! 	Сайын түзден тап мекен, 	Басқа орнасын бақ бекем.	Қу медиен түздерге	Ырыс дарыт, ақбөкен! – деп батасын береді. Осыдан соң, киікке кие бітіп, қасиетті түз тағысы саналыпты. Оны нақақ өлтірген қаскөй Адам атаның қарғысына ұшырайды деген түсінік бар. «Киіктің де киесі бар, пайғамбардай иесі бар» деген сөз осыдан қалыпты деседі.",
    id: "image4"
  },
  {
    img: document.getElementById("image6"),
    text: "Дәуіт пайғамбардың  тұсында Ғайдуна деген қаланы ордалы жылан басады. Олардың көптігі сондай, күрек басындай жерге он жылан сыяды екен. Қарсы келген адамға атылып, бет қаратпапты. Күресуге дәрмені қалмаған паша жұртты жинап, кеңеседі. Қариялар:	– Дәуіт пайғамбардан көмек сұрайық, – деседі. Сөйтіп Дәуітке хабаршы жібереді. Дәуіт пайғамбарлығына қоса темірден түйін түйген ұста екен. Хабаршыны тыңдап болған соң, кеудесінен бір түймені үзңп алады. Оны төске қойып, балғамен үш мәрте соққанда түймесі жәндікке айналып шыға келеді. Оны хабаршыға беріп:	– Қалаға кіргенде босат. Жыланды осы қуып шығады, – дейді. Жұрт Дәуітті күтіп отыр еді. Хабаршыны көріп:	– Дәуіт қайда? – деп сұрайды. Жігіт жәндікті көрсетіп:	– Міне, – дейді. Жәндік секіріп түсіп, жыландармен айқасқа түседі. Олардың көзін ойып, қаладан қуып шығады.	Ерлігіне риза болған ел оны «Дәуіт», «Дәуіттің жәндігі» атап кетеді. Оған қасиетті, киелі деп құрмет көрсетіпті.",
    id: "image6"
  },
  {
    img: document.getElementById("image7"),
    text: "Дәуіт пайғамбар жас күнінде Жалут деген жалғыз көзді дәумен жекпе-жекке шығады. Жалуттың бойы үш құлаш екен. Ол заманда оған тең келер батыр тумапты. Жалуттың алмас қыпышы бар екен. Қылыштың өткірлігі сондай, тау-тасты ұрса күл-талқан етіп, шашып жіберетін қасиеті болыпты. 	Дәуіт соғысқа шығарда Жебірейіл періште көктен қудіретті қалқан түсіреді. Ол Жалуттың қылышын бойға дарытпайды. Дәу бар күшімен ұрса да, қалқанды сындыра алмапты. Әбден әлсіреп, амалы таусылғанда Дәуіт оны көзінен жаралап өлтірген екен. Заманнан заман озып, Дәуіт патша дүние салады. Ақтық сәтінде қалқанды бауырына қысып, сипалап жатып көз жұмады. Патшаны арулап көмген соң, қасиетті қалқанды қолға түсіргісі келген дұшпан көп болған екен. Қудай құдіретімен қалқанға жан бітіріп, тасбақаға айналдырып жіберіпті. Тасбақаның киелі болатыны осыдан екен деседі.",
    id: "image7"
  },
  {
    img: document.getElementById("image9"),
    text: "Нұх заманында топан су тартылған соң, таулардың төбесі көрінеді. Асқар таулар: – Нұх маған тоқтайды. Адамзат ұрпағы мен тұрған жерден қайта тарайды, – деп таласады. Қазығұрт тауы ғана сынықтық танытып: 	 – Бұл дәрежеге лайық емеспін. Нұхтың кемесі биік тауға тоқтар, – дейді. Құдайға Қазығұрттың кішіпейіл мінезі ұнап: 	– Нұх, кемені Қазығұртқа қондыр! Тіршілік сол жерден басталсын! – деп әмір етеді. Нұх: 	– Қазығұрт тауы қайда? – деп сұрайды пайғамбар. Тәңірсі сонда үкі деген құс жаратып: 	– Мына құсты қасыңа ал! Оның көзі өткір – түнде жақсы көреді. Қазығұртқа баратын жолды сол біледі, – дейді. Үкі Қазығұртқа жеткенше кеменің алдында жол көрсетіп, ұшып отырады. Нұх Жида тауын, сосын Арарат тауын айналып өтеді. Кеменің желкені көрінгеңде таулар балбырап, балқып кетіпті. Сондықтан да олардың жақпарында кемеге ұқсас жартастар түзіліпті. Нұх Қазығұртқа аман-есен тоқтайды. Кеме тоқтаған бетте пайғамбар кіші ұлы Жаппасқа «Осы жерге қазық қақ!» дейді. Сосын үкіге риза болып: 	– Орман-тоғайдың иесі бол! Шаңырағымның киесі бол! – деп бата берді. Содан үкіге айрықша кие дариды. Адамдар оны «тіл-көз тимесін» деп баланың бесігіне, қыздың бөркіне тағатын болыпты. 	Асқар таулар қанша жалынса да үкі тоқтамай айналып өтеді. Сонда таулар үкіні қарғап: «Көзің көр болып, көрмей қалсын!» депті. Содан бастап үкінің көзі күндіз көрмейтін соқыр болыпты. ",
    id: "image9"
  },
  {
    img: document.getElementById("image10"),
    text: "Ертеде Адам атаның екі иті болыпты. Бірі – ақ, екіншісі – қара түсті екен. Адам қойларын екеуіне сеніп тапсырыпты. Олар қойды өріске жайып, кешке қораға қамап жүреді. Бір күні қара иттің ниеті бұзылады. Нәпсісі қысқанда өзін тежей алмай, бір қойды тамақтап тастайды. Ақ ит оны көріп, айқаса кетеді. Екеуі төбелесіп, бірін бірі ала алмайды. Кенет Адам ата келіп қалды. Қара ит иесін көріп, орманға қаша жөнеледі. Қайта келуге бет жоқ. Содан орман-тоғай мен жапан түзді жағалап, жабайы аңның кейпін киеді. Баяғыдай ас беретін егесі жоқ. Жыртқышқа айналып, жемтігін өзі табады. Бірақ Адам атаға бауыр басып қалған. Кейде Адамды сағынып ұлиды екен. Ит оның даусын естіп: – Өз обалың өзіңе, нәпсіңе билетіп нең бар еді?! - деп үріп, жолатпайды. Бұдан қайыр болмаған соң қасқыр Жаратқанға ұлып: 		– Уа, Тәңірім, итті қарашы, жанында егесі бар. Үнемі қамқор болып, ас берді.  Жататын жері де бар. Мен жалғызбын. Менің кімім бар? – деп арыз айтыпты. Тәңірінің оған жаны ашып: 	– Ей, қасқыр, сен қам жеме. Сенің иең Менмін! – депті. Осыдан бастап « Иттің егесі болса, бөрінің Тәңірсі бар» деген сөз қалыпты.	",
    id: "image10"
  },
]

function changeImg(val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id == val) {
      document.getElementById("img_main_text").innerHTML = arr[i].text;
      document.getElementById("image_main").src = arr[i].img.src;
    }
  }

}
var feild = document.querySelector('textarea');
var backUp = feild.getAttribute('placeholder');
var btn = document.querySelector('.btn');
var clear = document.getElementById('clear')

feild.onfocus = function(){
    this.setAttribute('placeholder', '');
    this.style.borderColor = '#fff';
    this.style.color = "#fff";
    btn.style.display = 'block'
}

feild.onblur = function(){
    this.setAttribute('placeholder',backUp);
    this.style.borderColor = 'white'
}

clear.onclick = function(){
    btn.style.display = 'none';
    feild.value = '';
}
