// Typy danych - wprowadzenie
// Mamy 7 typów wbudowanych

// Typy proste
// string, number, boolean, undefined, null, symbol

// Typy referencyjne
// Obiekty: obiekt, funkcje

/* Typ - zbiór cech i zachowań przypisany do wartości zaliczanej do danego typu. Z punktu widzenia języka wartość "100" i 100 czy "true" i true, to zupełnie coś innego */

// typeof - operator, który zwraca informacje o typie

// STRING - łańcuch znaków
typeof "tekst"; // "string"
typeof '222.222'; // "string"
typeof `grawis`; // "string" z specjalnymi cechami
let userName = "Tymoteusz";
typeof userName;

// NUMBER - liczba ( bez podzialu na integer, float, decimal)
typeof 222.222; // 'number'
typeof 1000; // 'number'
typeof 3.2e10; // 'number'
typeof NaN; // 2.2 * "a" [Not a Number]

// BOOLEAN - wartosc logiczna
typeof true;
typeof false;
typeof (2 == 3);

// UNDEFINED - niezdefiniowany (jedna wartosc)
// najczesciej tworzone przez jezyk
typeof undefined;
let dateFirstLogin;
typeof dateFirstLogin;

// NULL - nie posiada (jedna wartosc)
// Najczesciej przez programiste
let userSecondName = null;
typeof null; // object

// SYMBOL (nowy typ w ES6)
typeof Symbol(); // 'symbol'

// OBIEKTY - Typ referencyjny
typeof {}; // 'object'
typeof

function () {}; // 'function' fukcja to też jest obiekt!!!!
typeof []; // 'object'


// Przypisanie wartosci i przypisanie referencji do obiektu
let primitiveType1 = 20;
let primitiveType2 = primitiveType1;
primitiveType1 = 30;


let referenceValue1 = [1, 2, 3];
let referenceValue2 = referenceValue1;
referenceValue1[3] = 4;
// Obiekt nie zostal skopiowany a został przypisany jedynie link do miejsca w pamieci, w ktorym sie znajduje