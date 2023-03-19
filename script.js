//--------------------------
// 1. ZMIENNE I TYPY
//--------------------------
console.log("ZMIENNE I TYPY");
//a) zdefiniuj zmienne const z wartościami w następujących typach: boolean, number, string. Wyloguj w konsoli te zmienne oraz użyj typeof aby wyświetlić również typy danych
console.log("a)");

const isTrue = true;
const number = 2;
const coffee = "Espresso";
console.log(
  typeof isTrue,
  isTrue,
  typeof number,
  number,
  typeof coffee,
  coffee
);
//b) użyj console log i wyświetl wyniki poniższych działań, dodatkowo wyjaśnij: jaki jest typ wyniku i z czego wynika.
// 2 + "2"
// 2 + 2
// 2 * "2"
// 2 * 2
// 1 == true
// 0 == false
// 0 == null
// null == undefined
console.log("b)");
const first = 2 + "2";
const second = 2 + 2;
const third = 2 * "2";
const fourth = 2 * 2;
console.log(first, second, third, fourth);
console.log(
  first,
  "obie values maja inny type, number 2 dodaje sie do stringa 2 i daje 22 zamiast 4"
);
console.log(
  second,
  fourth,
  "number i number zawsze wejda w kalkulacje i dadza wynik dzialania"
);
console.log(
  third,
  "to ze jedno 2 to number a drugie 2 to string nie ma znaczenia. jesli dwa ciągi są liczbami, mnoży je jako liczby, jesli nie, jest NaN "
);
console.log(1 == true);
console.log(
  "1 daje true, znak == sprawdza wartosc pod kątem równości bez wzgledu na typeof"
);
console.log(0 == false);
console.log(
  "0 daje false, znak == sprawdza pod kątem równości bez wzgledu na typeof wiec 0 przypisane do false rowna sie true, "
);
console.log(0 == null);
console.log("zero jest wartoscia wiec nie jest null");
console.log(null == undefined);
console.log("null po czesci jest undefined - so true");

//napisz dodatkowo czym różnią się następujące zapisy: "=", "==", "==="
console.log(
  "= znak przypisania / == znak rownosci po konwersji typeof(tylko ze wzgledu na zawartosc) / === znak rownosci pod wzgledem zawartosci i typeof "
);
//c) napisz krótko czym różni się typ referencyjny od typu prostego, oraz podaj przykłady tych typów. Odpowiedź wyświetl w konsoli
console.log("c)");
console.log(
  "Oba te typy zachowuja sie troche inaczej 'under the hood' : typ prosty przechowuje wartosc bezwzgledna np let cat = `Findus` a referencyjny przechowuje wartosc jako miejsce w pamieci - de facto referencje do wczensiej utworzonego typu prostego, np let myCat = cat. Teraz jesli dopisze linijke cat = `Melvin` i wykonsoluje cat oraz myCat, dostane dwa rozne imiona mimo ze cat i myCat byly do siebie przypisane"
);
let cat = "Findus";
let myCat = cat;
cat = "Melvin";
console.log("Proof:", cat, myCat);
//d) spróbuj przekonwertować i wyświetlić w konsoli poniższe wartości:
console.log("d)");
let val = 0; // (przekonwertuj na typ Boolean)
const toBoolean = Boolean(val);
console.log(toBoolean);

let num = "2137"; // (przekonwertuj na typ Number)
const toNumber = Number(num);
console.log(toNumber);

let str = 007; // (przekonwertuj na String)
const toText = str.toString().padStart(3, "0");
console.log(toText);

let und = undefined; //(przekonwertuj na Boolean)
const toBoolean2 = Boolean(und);
console.log(toBoolean2);

//e) stwórz pustą tablicę za pomocą new Array() i dodaj do niej 3 elementy za pomocą .push(), wyświetl wynik w konsoli
console.log("e)");
let arr = Array();
arr.push("two", "tablespoons", "of sugar");
console.log(arr);
//f) swtórz pusty obiekt za pomocą new Object() i dodaj do niego 3 klucze z wartościami, wyświetl wynik w konsoli
console.log("f)");
let emptyObj = Object();
emptyObj["name"] = "Lidia";
emptyObj["surname"] = "Bylicka";
emptyObj["age"] = 27;
console.log(emptyObj);

//g)* opisz krótko czym dokładnie jest typ NaN
console.log("g)");
console.log(
  "NaN czyli Not a Number - wskazuje ze dana wartosc nie jest liczba/cyfra. Undefined i null (puste wartosci) tez beda NaN"
);
//h)** znajdź w sieci informacje o typie Symbol i opisz go krótko
console.log("h)");
console.log(
  "Symbol() jest typem prostym; zwraca zawsze unikatowa wartosc (nie powtarzalna), wiec porownujac dwa Symbol() o tej samej zawartosci, nadal zwroci sie nam false; uzywa sie go do dostawania sie do obiektow w kodzie 'z ukrycia', przeskakujac nad mechanizmami konstrukcji; przyklad ponizej"
);
let a = Symbol();
let b = Symbol("b");
let c = Symbol("b");
console.log(typeof a, typeof b, typeof c);
console.log(a, b, c);
console.log(Symbol("b") === Symbol("b"));
console.log(b === c);

//--------------------------
//2. FUNKCJE & WARUNKI
//--------------------------
console.log("FUNKCJE & WARUNKI");
//a) napisz funkcję która przyjmie trzy parametry i zwróci ich sumę. Wyświetl w konsoli wynik dodawania dowolnych trzech liczb
console.log("a)");
let d = 1;
let e = 3;
let f = 6;
const addNumbers = (d, e, f) => d + e + f;
console.log(addNumbers(d, e, f));
//b) napisz funkcję która przymie dwa parametry, wysokość i podstawę trójkąta a następnie obliczy i zwróci pole trójkąta. Przekaż do funkcji dowolne wartości i wyświetl w konsoli wynik
console.log("b)");
let height = 25;
let base = 5;
function triangle() {
  return (height * base) / 2;
}
console.log(triangle(height, base));
//c) napisz funkcję która przyjmie aktualny wiek i obliczy oraz zwróci informację ile lat minęło od 18 urodzin. Jeśli podany wiek będzie mniejszy niż 18, użyj if aby zwrócić taką informację
console.log("c)");
let age = 27;
let ageDiff = age - 18;
function howLongAdult() {
  ageDiff > 0
    ? console.log(`It's been ${ageDiff} years since your first legal beer`)
    : console.log("You're not an adult yet!");
}
howLongAdult();

//d) napisz funkcję która przyjmie tablicę z co najmniej 3 elementami i zwróci następujący komunikat: "Przekazana tablica ma X elementów a elementem numer 3 jest X" w miejscach oznaczonych jako X powinny wyświetlać się odpowienie wartości
console.log("d)");
let threeBooleans = [true, true, false];
console.log(
  "Przekazana tablica ma " +
    threeBooleans.length +
    " elementy a elementem numer 3 jest " +
    threeBooleans[2]
);
//or - is it better practice:
let length = threeBooleans.length;
let thirdBoolean = threeBooleans[2];
console.log(
  `Przekazana tablica ma ${length} elementy a elementem numer 3 jest ${thirdBoolean}`
);

//e) napisz funkcję która przyjmie obiekt testPerson i zwróci komunikat "Pan/i (imię) (nazwisko) ma (wiek) lat oraz (wzrost) cm wzrostu". Możesz zdefiniować inną osobę i użyc funkcji ponownie.
console.log("e)");
let testPerson = {
  name: "Jan",
  surname: "Kowalski",
  age: 20,
  height: 180,
};
const mrOrMrs = (testPerson) => {
  const name = testPerson["name"];
  if (name.length - 1 === "a") {
    return "Pani";
  } else {
    return "Pan";
  }
};
const personDescription = (testPerson) => {
  let name = testPerson.name;
  let surname = testPerson.surname;
  let age = testPerson.age;
  let height = testPerson.height;
  let gender = mrOrMrs(testPerson);
  return console.log(
    `${gender} ${name} ${surname} ma ${age} lat oraz ${height} cm wzrostu`
  );
};
personDescription(testPerson);

//f) napisz funkcję która przyjmie obiekt testPerson oraz drugi parametr. Funkcja powinna zmienić wartośc jednego z klucza w obiekcie. Spróbuj zmodyfikować na przykład wiek.
console.log("f)");
let newAge = 20;
function changeAge(testPerson, newAge) {
  if (testPerson["age"] !== newAge) {
    testPerson["age"] = newAge;
    console.log(
      `Thank you, your age has been changed to ${newAge}. Your amended details are below:`
    );
  } else {
    console.log(
      "Choose age value different to the original to change it. Your current details are:"
    );
  }
  return testPerson;
}
console.log(changeAge(testPerson, newAge));
console.log(changeAge(testPerson, 25));

//g) napisz funkcję która przyjmie jeden parametr. Jeśli parametr nie jest typu Number, funkcja powinna zwrócić informację w konsoli, że przyjmowany jest tylko typ number. Jeśli przekazana wartość jest typu Number:
// - gdy cyfra jest podzielna przez 3 i 5, niech zwróci string "FizzBuzz"
// - gdy cyfra jest podzielna przez 3, niech zwróci string "Fizz"
// - gdy cyfra jest podzielna przez 5, niech zwróci string "Buzz"
console.log("g)");

let theNumber = true;
const fizz = "Fizz";
const buzz = "Buzz";

const letsDivide = (theNumber) => {
  theNumber % 3 === 0 && theNumber % 5 === 0
    ? console.log(fizz + buzz)
    : undefined;
  theNumber % 3 === 0 && theNumber % 5 !== 0 ? console.log(fizz) : undefined;
  theNumber % 5 === 0 && theNumber % 3 !== 0 ? console.log(buzz) : undefined;
};
isNaN(theNumber) || typeof theNumber === "boolean"
  ? console.log("You have to insert numeric value")
  : letsDivide(theNumber);

letsDivide(25); //with numeric value divisable by5
letsDivide(30); //with numeric value divisable by 3 and 5
letsDivide(18); //with numeric value divisable by 3

//h) napisz funkcję która przyjmie numer a następnie sprawdzi czy cyfra jest parzysta i zwróci informację. Użyj operatora trójargumentowego
console.log("h)");
let myNumber = 7572;
const isEven = (myNumber) => {
  myNumber % 2 === 0 ? console.log("Parzysta!") : console.log("Nieparzysta");
};
isEven();

//i)* napisz funkcję która wylosuje i zwróci liczbę od 1 do 10
console.log("i)");
let randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);

//j)** napisz funkcję która przyjmie dwie liczby, a następnie wylosuje i zwróci liczbę z podanego zakresu
console.log("j)");
let start = -13;
let stop = 7;
const pickAtRandom = (start, stop) => {
  start = Math.ceil(start);
  stop = Math.floor(stop);
  return Math.floor(Math.random() * (stop - start + 1)) + start;
};
console.log(pickAtRandom(start, stop));

//k)*** wyszukaj w internecie metody Javascriptowe Math. i użyj trzech z nich aby napisać funkcje wykonujące działania według Twojego własnego pomysłu.
console.log("k)");
let k = -234.567;
const getAbsolute = (k) => Math.abs(k);
console.log(getAbsolute(k));
const roundItUp = (k) => Math.round(k);
console.log(roundItUp(k));
let l = 2.5;
let m = 235;
let n = 875;
const checkIfCommonDenom = (l) => (m % l === 0 && n % l === 0 ? true : false);
console.log(checkIfCommonDenom(l));

//--------------------------
// FUNKCJE & PĘTLE
//--------------------------
console.log("FUNKCJE & PETLE");
//uwaga! Możesz spróbować każdą z pętli napisać w funkcji

//a) napisz pętlę która odliczy od 1 do 9
console.log("a)");
for (i = 1; i <= 9; i++) {
  console.log(i);
}

//b) napisz pętlę która odliczy od 9 do 1
console.log("b)");
for (i = 9; i >= 1; i--) {
  console.log(i);
}
//c) napisz pętlę która odliczy od 5 do 15
console.log("c)");
for (i = 5; i <= 15; i++) {
  console.log(i);
}
//d) napisz pętlę która odliczy od 0 do -10
console.log("d)");
for (i = 0; i >= -10; i--) {
  console.log(i);
}
function zeroToMinusTen() {
  for (i = 0; i >= -10; i--) {
    console.log(i);
  }
}
zeroToMinusTen();
//e) napisz pętlę która odliczy od 1 do 20, iteracja co 2*
console.log("e)");
const oneToTwenty = (i) => {
  for (i = 1; i <= 20; i += 2) {
    console.log(i);
  }
};
oneToTwenty();
//f) napisz pętlę która odliczy od 10 do -10, iteracja co 4
console.log("f)");
const tenToMinus = (i) => {
  for (i = 10; i >= -10; i -= 4) {
    console.log(i);
  }
};
tenToMinus();
//g)* napisz pętlę, ktora będzie odliczać od 1 do 100, ale iteracja z każdym wykonaniem będzie rosła dwukrotnie, czyli 1, 2, 4, 8...
console.log("g");

function doubleIter() {
  for (let i = 1; i <= 100; i += (i * 2) / 2) {
    console.log(i);
  }
}
doubleIter();

//h)* napisz pętlę która będzie odliczać od 1 do 10, ale wyświetli tylko nieparzyste wartości
console.log("h)");
const onlyOdd = (i) => {
  for (i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};
onlyOdd();

//i)* napisz pętlę która odliczy od 1 do 10, i wyświetli w konsoli informację o tym czy wyświetlona cyfram jest parzysta czy nie, możesz użyć operatora trójargumentowego
console.log("i)");

for (i = 1; i <= 10; i++) {
  console.log(i);
  i % 2 === 0 ? console.log("Parzysta") : console.log("Nieparzysta");
}

//Uwaga! kolejne pętle trzeba napisać w funkcji

//j) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do podanej wartości
let o = 9;
const fromOneTo = (o) => {
  for (i = 1; i <= o; i++) {
    console.log(i);
  }
};
fromOneTo(o);

//k) napisz funkcję, która przyjmie numer i w pętli odliczy od 1 do 50, ale iteracja będzie się odbywać co podaną wartość. (Jeśli argumentem przekazanym do funkcji jest 3, to pętla ma odliczać 3,6,9 itp.)
console.log("k)");
let p = 3.5;
const everyP = (p) => {
  for (i = 1; i <= 50; i += p) {
    console.log(i);
  }
};
everyP(p);
//l) napisz funkcję która przyjmie tablicę arrNames i wyświetli w konsoli przywitanie dla każdej z osób
console.log("l)");
const arrNames = [
  "Ksawery",
  "Zenobiusz",
  "Klementyna",
  "Apolonia",
  "Jeremiasz",
  "Bernadetta",
  "Test last Person",
];
let item = 0;
function welcoming() {
  do {
    console.log("Witaj " + arrNames[item]);
    item++;
  } while (item < arrNames.length);
}
welcoming();

//ł) napisz funkcję która przymie tablicę arrObjects i wyświetli dla każdego obiektu informację "przed Tobą stoi (kolor) (marka)", np niebieski Mustang.
console.log("ll)");
const arrObjects = [
  {
    brand: "Mustang",
    color: "niebieski",
  },
  {
    brand: "Tesla",
    color: "czarna",
  },
  {
    brand: "Polonez",
    color: "żółty",
  },
  {
    brand: "Toyota",
    color: "fioletowa",
  },
];
function thisCar() {
  for (let i in arrObjects) {
    let kolor = arrObjects[i].color;
    let marka = arrObjects[i].brand;
    console.log(`przed Tobą stoi ${kolor} ${marka}`);
  }
}
thisCar();

//m) napisz funkcję która przyjmie tablic arrNumbers i wyświetli w konsoli tylko przyste elementy tablicy
console.log("m)");
const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function showEven() {
  for (n = arrNumbers[0]; n < arrNumbers.length; n++) {
    if (n % 2 === 0) {
      console.log(n);
    }
  }
}
showEven(arrNumbers);
//n)* napisz funkcję, która przeiteruje po tablicy arrTypes i:
// - za pomocą push umieści elementy o typie innym niż number w tablicy arrOther
// - za pomocą push umieści elementy o typie number w tablicy arrNumbers
// - za pomocą push umieści numery parzyste w tablicy arrEven
// - na końcu zwróci obiekt z tymi trzema tablicami
console.log("n)");
const arrTypes = [
  2,
  4,
  5,
  undefined,
  null,
  "val",
  NaN,
  7,
  10,
  333,
  "874",
  22,
  21,
  400,
  "400",
  "undefined",
];

const arrOther = [];
const arrNubers = [];
const arrEven = [];
let objectOfArrays = {};
function separateArrays() {
  for (n = 0; n < arrTypes.length; n++) {
    if (typeof arrTypes[n] !== "number" || isNaN(arrTypes[n])) {
      arrOther.push(arrTypes[n]);
    }
  }
  for (n = 0; n < arrTypes.length; n++) {
    if (typeof arrTypes[n] === "number" && isNaN(arrTypes[n]) === false) {
      arrNubers.push(arrTypes[n]);
    }
  }
  for (n = 0; n <= arrNubers.length; n++) {
    if (arrNubers[n] % 2 === 0) {
      arrEven.push(arrNubers[n]);
    }
  }
  let objectOfArrays = {
    arrOther,
    arrNubers,
    arrEven,
  };
  console.log(objectOfArrays);
}
separateArrays();
//--------------------------
// METODY
//--------------------------
console.log("METODY");
//a) za pomocą metody map wyloguj przywitanie dla każdej osoby z tablicy names
console.log("a)");
const names = ["Seba", "Kari", "Mati", "Andżi"];

const hiNames = names.map((name) => "Hi " + name);
console.log(hiNames);

//2ND OPTION: displaying the greeting in the terminal:
let sayHi = names.map(function (name) {
  console.log(`Hi ${name}`);
});
//console.log(sayHi);

//b) za pomocą metody filter stwórz nową tablicę z tablicy array10 z parzystymi liczbami
console.log("b)");
const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const onlyEven = array10.filter((n) => n % 2 === 0);
console.log(onlyEven);

//c) użyj filter na tablicy people aby zwrócić tablicę tylko z kobietami
console.log("c)");
const people = [
  {
    name: "Tomasz",
    lastname: "Kowalski",
    gender: "male",
  },
  {
    name: "Karol",
    lastname: "Nowak",
    gender: "male",
  },
  {
    name: "Joanna",
    lastname: "Kowalska",
    gender: "female",
  },
  {
    name: "Anna",
    lastname: "Nowak",
    gender: "female",
  },
];

const females = people.filter((fem) => fem.gender === "female");
console.log(females);

//d) użyj metod takich jak split i sort aby zmienną shopping przekonwertować na tablicę z listą zakupów. Każde słowo powinno być osobną pozycją w tablicy. Ponad to posortuj wartości alfabetycznie. Spróbuj też ujednolicić wielkość liter aby lista była bardziej czytelna.

const shopping =
  "kawa MaSŁo chleb WODA ogórki jabłka Ziemniaki chipsy salcesoN wędLIna pieczarki Włoszczyzna heRBata truskawKi maliny";
let shoppingList = shopping.toUpperCase().split(" ").sort();
console.log(shoppingList);

//e) połącz litery alfabetu w tablicy alphabet w jeden string a następnie odwróć kolejność aby wynik wyglądał tak: "ZYXWV..."

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const reversedAlph = alphabet.reverse().join("");
console.log(reversedAlph);
