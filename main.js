// 1. წინა დავალებიდან გადმოიტანეთ ფუნქცია getRandomNumber რომელიც იღებს a და b პარამეტრებს
//    და აბრუნებს შემთხვევით რიცხვებს a-დან b-მდე

function getRandomNumber(a, b){
    return Math.floor(Math.random() * (b - a)) + a; 
}

// 2. დაწერეთ ფუნქცია, რომელიც მიიღებს ერთ პარამეტრს (n - ნატურალური რიცხვი)
//    და დააბრუნებს n სიგრძის მასივს, რომელშიც იქნება 0-დან 100-მდე შემთხვევითი რიცხვები.
//    შემთხვევითი რიცხვის მისაღებად გამოიყენეთ უკვე დაწერილი ფუნქცია getRandomNumber. 
//    ფუნქციის მიერ დაბრუნებული მასივი შეინახეთ ცვლადში randomNumbers

function setRandomNumber(n){
    let randomNumbers = [];
    for(let i = 0; i < n; i++){
        randomNumbers.push(getRandomNumber(0, 101));
    }
    return randomNumbers;
}

// 3. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს #2 ფუნქციის მიერ დაბრუნებულ
//    მასივს randomNumbers, ამ მასივში იპოვის და დააბრუნებს უდიდეს რიცხვს.

function max(randomNumbers){
    console.log(randomNumbers);
    return Math.max(...randomNumbers);
}
console.log(max(setRandomNumber(5)));

// 4. დაწერეთ ფუნქცია, რომელსაც პარამეტრად გადაეცემა მასივი და აბრუნებს შეტრიალებულ მასივს.
//    მაგალითად თუ პარამეტრად გადავცემთ [1, 2, 3] მასივს, უნდა დააბრუნოს [3, 2, 1] მასივი.

function reverseOfArray(array){
    return array.reverse();
}
console.log(reverseOfArray([1,9,17]));

// 5. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ნატურალურ რიცხვს და დააბრუნებს true -ს თუ
//    რიცხვი არის მარტივი, ან false -ს თუ რიცხვი არ არის მარტივი. მარტივია რიცხვი, რომელიც მხოლოდ 
//    1-ზე და თავისთავზე იყოფა. მარტივი რიცხვებია: 2, 3, 5, 7, 11 და ა.შ.

function isPrimeNumber(n){
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

// 6. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ორ რიცხვს (a, b) და დააბრუნებს მასივს, რომელშიც 
//    მოქცეული იქნება a -დან b -მდე ყველა მარტივი რიცხვი. მაგალითად თუ პარამეტრად მიიღებს 0 -ს და 
//    12 -ს უნდა დააბრუნოს [2,3,5,7,11]. მარტივი რიცხვის დასადგენად გამოიყენეთ #5 პუნქტში აღწერილი ფუნქცია.

function getArrayOfPrimeNumbers(a, b){
    let arrayNumbers = [];
    for(let i = a; i < b; i++){
        if(isPrime(i) === true){
            arrayNumbers.push(i); 
        }
    }
    return arrayNumbers;
}

// 7. შექმენით ობიექტების მასივი, სადაც თითოეულ ობიექტს გააჩნია name და age ველები. (გაკეთებული გვაქვს #11 დავალებაში).
//    შემდეგ შექმენით ფუნქცია, რომელიც პარამეტრად მიიღებს ამ მასივს და დააბრუნებს ყველაზე ახალგაზრდა ობიექტს (რომლის
//    age ველიც არის უმცირესი).

let family = [ 
    {
        name: 'mako',
        age: 26
    },
    {
        name: 'saba',
        age: 27
    },
    {
        name: 'eka',
        age: 46
    },
    {
        name: 'luka',
        age: 20
    },
    {
        name: 'sopo',
        age: 32
    },
    {
        name: 'oto',
        age: 29
    },
    {
        name: 'daro',
        age: 55
    }
]

function getMinAge(family){
    let familyAge = [];
    for(let i = 0; i < family.length; i++){
        familyAge.push(family[i].age);   
    }
    let minAge = Math.min(...ageArray); 
    let minAgeindex = ageArray.indexOf(minAge);
    return family[minAgeindex] ;  
}

console.log(minAge(family));
