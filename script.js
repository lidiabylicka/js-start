//  DANE WEJŚCIOWE
const people = [
  {
    firstName: "Bartolomeo",
    lastName: "Lozano",
  },
  {
    firstName: "Mateo",
    lastName: "Loza",
  },
  {
    firstName: "JP",
    lastName: "2",
  },
];

/* 
      1. Napisz funkcję mapującą, która utworzy klucz(właściwość) nickname na każdej osobie w tablicy w następujący sposób:
      a) -OK pobierze 3 pierwsze litery imienia, odwróci ich kolejność i zapisze do zmiennej
      //onazoL
      //Lozano
      b) -OK pobierze 3 ostatnie litery nazwiska, zamieni kolejnością pierwszą i ostatnią i dołączy powstały string do poprzedniego
      c*) -OK Zmieni wielkość liter w taki sposób, żeby powstały nick zaczynał się wielką literą i nie miał żadnych wielkich liter poza 1.
      d) - OK Jeżeli liczba znaków w imieniu bądź nazwisku jest mniejsza niż 3, nickname będzie odpowiednio krótszy 
      e) rozważcie wszystkie skrajne przypadki, ponieważ Waszą funkcję mapującą wrzucimy do testów na platformie
      e) Have fun :)
      Na przykład:
      Dla osoby: 
      {
          firstName: 'Bartolomeo',
          lastName: 'Lozano'
      }
      powinniśmy uzyskać nickname Rabona
  */

const result = people.map((person) => {
  const firstPart = person.firstName
    .slice(0, 3)
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  const finalFirstPart = firstPart[0].toUpperCase() + firstPart.substring(1);
  const secondPart = person.lastName.slice(-3).toLowerCase();
  const finalSecondPart =
    secondPart.length < 2
      ? secondPart
      : secondPart[secondPart.length - 1] +
        secondPart.substring(1, secondPart.length - 1) +
        secondPart[0];

  return {
    ...person,
    nickname: finalFirstPart + finalSecondPart,
    introduceYourself: function () {
      console.log(
        "Cześć jestem " +
          this.firstName +
          " " +
          this.lastName +
          ", ale w szkole mówią na mnie [" +
          this.nickname +
          "]."
      );
    },
    getFavouriteColor: function (value) {
      if (value < 1) {
        return console.log(
          "- podałeś za małą liczbę, liczba nie może być mniejsza niż 1"
        );
      } else if (value > 30) {
        return console.log(
          "- podałeś za dużą liczbę, liczba nie może być większa niż 30"
        );
      } else if (value == undefined) {
        value = 5;
      }
      let nameNumber =
        this.firstName.length + this.lastName.length + this.nickname.length;
      let minus = Math.abs(nameNumber - value);
      let colorsLength = colors.length;
      let index = minus % colorsLength;
      let getColorByIndex = colors[index];
      console.log(getColorByIndex);
    },
  };
});

console.log("zad 1a)b)c)d)e) result");
console.log(result);
console.log("zad 2a)wywolanie powitania:");
result[0].introduceYourself();

console.log("2b)wywolanie powitania dla kazdego:");
const welcomeAll = result.forEach((person, index, result) => {
  return person.introduceYourself();
});

//  DANE WEJŚCIOWE
const people2 = [
  {
    firstName: "Bartolomeo",
    lastName: "Lozano",
    nickname: "Rabona",
  },
];

/* 
      2. 
      a) Do każdego obiektu dodaj funkcję introduceYourself, która za pomocą słówka this wyświetli w konsoli tekst powitalny.
      Oczywiście tekst powinien wyświetlić się dopiero po wywołaniu funkcji.
      Dla powyższego przykładu tekst powinien wyglądać w następujący sposób:
      "Cześć jestem Bartolomeo Lozano, ale w szkole mówią na mnie [Rabona]"
      Natomiast wywołanie funkcji: people[0].introduceYourself()
      Obiekt z przykładu powinien wyglądać w ten sposób
      {
          firstName: "Bartolomeo",
          lastName: "Lozano",
          nickname: "Rabona",
          introduceYourself: // tutaj ma się znajdować funkcja
      },
      b) za pomocą pętli forEach, wywołaj funkcję powitalną dla każdego elementu tablicy. W rezultacie na ekranie powinien
      pojawić się tekst powitalny dla każdej osoby w tablicy
      Hints:
      - nie używaj w tym zadaniu funkcji strzałkowej, ponieważ słówko this Ci nie zadziała i nie będziesz miał(a)
      dostępu do this.firstName lastName i nickname
      - postaraj się zdefiniować funkcję powitalną tylko raz (nie rób tego w pętli, ani funkcji map)
      
  */

//  DANE WEJŚCIOWE
const people3 = [
  {
    firstName: "Bartolomeo",
    lastName: "Lozano",
    nickname: "Rabona",
    introduceYourself: "", // funkcja zamiast pustego stringa
  },
];

/*
      3. 
      a) Dodaj do każdego obiektu funkcję getFavouriteColor
      b) funkcja ma przyjmować jeden parametr typu number z zakresu 1 - 30
      c) jeżeli podany parametr jest poza zakresem, powinien wyświetlić się odpowiedni komunikat
          - podałeś za małą liczbę, liczba nie może być mniejsza niż 1
          - podałeś za dużą liczbę, liczba nie może być większa niż 30
      d) w przypadku wywołania funkcji bez parametru, powinniśmy ustawić domyślną wartość na 5
      e) funkcja powinna zsumować wszystkie litery imienia, nazwiska i przezwiska, 
      odjąć od tej sumy liczbę wprowadzoną w parametrze, a następnie za pomocą działania modulo (%) względem długości tablicy kolorów
      wyznaczyć index
      f) za pomocą indexu funkcja powinna wyciągnąć odpowiedni kolor z tablicy i wyświetlić go w konsoli.
      Dla powyższego przykładu i liczby 5 wprowadzonej w parametrze, powinniśmy uzyskać wynik:
      (22 - 5) % 6 = 5
      console.log("orange")
      Hints
      - jeżeli po odjęciu parametru funkcji od sumy liter uzyskacie wartośc ujemną, możecie użyć metody z biblioteki Math, 
      Math.abs(-20), która zamieni liczbę na wartość absolutną, czyli dodatnią
      - w funkcji musicie użyć słówka this, parametru i tablicy, która jest na zewnątrz, tablica z kolorami może mieć
      dowoloną ilość kolorów
  */
value = 30;
const colors = ["red", "green", "yellow", "blue", "pink", "orange"];
console.log("zad 3 a)b)c)d)e)f)+hints");
result[0].getFavouriteColor();
result[0].getFavouriteColor(0);
result[0].getFavouriteColor(100);
result[0].getFavouriteColor(value);

/*
      4. Napisz funkcję analogiczną do funkcji z zadania 3, ale nie dodawaj jej w obiekcie.
      a) funkcja powinna przyjąć 2 parametry (obiekt osoby i liczbę z zakresu 1 - 30)
      b) funkcja powinna wykonać dokładnie takie samo działanie jak poprzednia
      c) Za pomocą pętli for of przeiteruj po wszystkich osobach z tablicy i wyświetl ich ulubione kolory
  */
console.log("zad 4 a)b)c)");
let value2 = undefined;

function getTheirFavouriteColors(value2) {
  if (value2 < 1) {
    return console.log(
      "- podałeś za małą liczbę, liczba nie może być mniejsza niż 1"
    );
  } else if (value2 > 30) {
    return console.log(
      "- podałeś za dużą liczbę, liczba nie może być większa niż 30"
    );
  } else if (value2 == undefined) {
    value2 = 5;
  }
  let nameNumber =
    person.firstName.length + person.lastName.length + person.nickname.length;
  let minus = Math.abs(nameNumber - value2);
  let colorsLength = colors.length;
  let index = minus % colorsLength;
  let getColorByIndex = colors[index];
  return getColorByIndex;
}
for (person of result) {
  console.log(
    person.firstName +
      "'s favourite color is " +
      getTheirFavouriteColors(value2)
  );
}
//zadanie 5:
console.log("zad. 5 a)b)");
const isEliteChance = Math.floor(Math.random() * 100);
console.log("isEliteChance:", isEliteChance);
function isPrime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}

const isElite =
  isEliteChance % 3 === 0 ||
  isEliteChance % 5 === 0 ||
  isPrime(isEliteChance) === true
    ? true
    : false;
console.log("isElite gateway:", isElite);

const filteredPeople = result.filter(
  (person) =>
    isElite === true ||
    person.firstName.endsWith("k") ||
    (person.firstName.endsWith("a") &&
      person.lastName.length > 6 &&
      person.nickname.includes("a"))
);
console.log("filteredPeople", filteredPeople);
console.log("5 d)");
const reversedPeople = filteredPeople.map((person) => {
  let reversedObject = {};
  delete person.introduceYourself;
  delete person.getFavouriteColor;
  for (key in person) {
    person.key++;
    reversedObject[person[key]] = key;
  }
  return reversedObject;
});
console.log("reversedPeople no functions:");
console.log(reversedPeople);
console.log("5 e) empty {} if isElite false");
const reversedPeopleKeysOnly = reversedPeople.reduce((object, array) => {
  for (key in array) {
    object[key] = array[key];
  }
  return object;
}, {});
console.log(reversedPeopleKeysOnly);
/*
      5. Zadanie polega na użyciu .filter() .map() .reduce w wersji łańcuchowej,
      czyli nie twórz nowych tablic w momencie wykonanie jednej z powyższych metod, połącz wykonanie ze sobą w jeden 
      "łańcuch" tzn. const wynik = arr.filter().map().reduce()

      a) -OK Przefiltruj tablicę w taki sposób, aby zostały w niej osoby,
      których imię kończy się na literę 'a' lub 'k' 
      i nazwisko ma więcej znaków niż 6 
      i nick zawiera w sobie przynajmniej jedną literę a
      b) - OK do powyższego warunku dodaj "furtkę" w postaci parametru isElite. Zmienna isElite powinna być obliczona
      za pomocą generatora liczb pseudolosowych Math.random(). Za pomocą tego generatora wylosujcie liczbę z zakresu 0 - 100.
      Jeżeli wartość losowej liczby będzie liczbą pierwszą lub będzie podzielna przez 3 i 5, ustawcie isElite na true, w pozostałych przypadkach
      isElite powinno być ustawione na false
      c) - OK jeżeli zmienna isElite ma wartość true, nie bierzcie pod uwagę warunku z punktu a przy filtracji
      d) - OK za pomocą funkcji map i for in odwróccie wartości i klucze w obiekcie, usuwając przy tym funkcje
      Przykład
      INPUT
      {
          firstName: "Bartolomeo",
          lastName: "Lozano",
          nickname: "Rabona",
          introduceYourself: '' // funkcja zamiast pustego stringa
          getFavouriteColor: '' // funkcja zamiast pustego stringa
      },
      OUTPUT
      {
          Bartolomeo: "firstName",
          Lozano: "lastName",
          Rabona: "nickname",
      },
      e) - OK zredukuj tablicę obiektów do pojedynczego obiektu, który będzie zawierał wszystkie klucze i wartości
      wszystkich obiektów z tablicy, dzięki temu, że w punkcie d) odwrócilismy klucze z wartościami, nie będzie 
      z tym problemu :)
      f) posortuj tablicę alfabetycznie --> cancelled
  */

/*
      *6. Currying function
      a) Napisz taką funkcję mnożącą 2 liczby, aby możliwe były następujące wywołania:
      - multi(5)(6)
      - const multiplyBySix = MULTI(6)
        multiplyBySix(10)
      b) Analogicznie napisz funkcję, która mnoży 4 liczby i możliwe jest wywołanie
      - multi(4)(5)(6)(10)
      Hints:
      - funkcja może zwracać inne funkcje
      - funkcja może korzystać ze zmiennych i parametrów funkcji zewnętrznych (czyli tych w których się znajduje)
  */
console.log("zad 6) a) nie do konca rozumiem");
const multi = (a) => {
  return (b) => {
    return a * b;
  };
};
console.log("multi(5)(6)", multi(5)(6));

console.log("b)");
function multi2(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a * b * c * d;
      };
    };
  };
}
console.log("multi2(4)(5)(6)(10)", multi2(4)(5)(6)(10));

function sum(a) {
  const multiplyBySix = (b) => {
    return a * b;
  };
  multiplyBySix.add = (b) => {
    return sum(6);
  };
  return multiplyBySix;
}
const multiplyBySix = sum(6);
console.log("multiplyBySix(10)", multiplyBySix(10));

/*
      **7. Rekurencja
       a) Mając zagnieżdżony obiekt, wyciągnij z niego wszystkie imiona i dodaj do tablicy
       ***b) Jeżeli osoba ma więcej niż jedno imię, te imiona powinny znajdować się w jednym stringu w tablicy
       Na przykład 'Kamil Bartek'
      INPUT:
  */
const nestedObject = {
  name: "Kamil",
  children: [
    {
      name: "Zosia",
    },
    {
      name: "Krysia",
      name2: "Barbara",
      children: [
        {
          name: "Basia",
          children: [
            {
              name: "Monika",
              name2: "Viola",
              children: [
                {
                  name: "Mateusz",
                },
                {
                  name: "Sebastian",
                  name2: "August",
                  name3: "Franciszek",
                  children: [
                    { name: "Alex" },
                    { name: "Stasio" },
                    {
                      name: "Paulina",
                      children: [{ name: "Kuba" }, { name: "Kacper" }],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

console.log(
  "7)a) rekurencja - duzo googlowania przy tym zadaniu, nie rozumiem jak dac imiona jednej osoby razem"
);

function getAllNames(obj) {
  let allNames = [];

  for (person in obj) {
    let value = obj[person];
    if (typeof value === "object") {
      //odtad probuje dopisac nowe
      // if (value.includes("name") === true) {
      //   value = value.join(" ");
      // }

      allNames = allNames.concat(getAllNames(value)); //ta czesc kodu ok
    } else {
      allNames.push(value);
    }
  }
  return allNames;
}
const allNames = getAllNames(nestedObject);
console.log(allNames);
