/*

/!*Opdracht 1 - Gegevens aanspreken*!/
// Opdracht 1a: Log het aantal medewerkers van de sales-afdeling in
// de console, in het volgende format: "De afdeling Sales
// heeft [x] medewerkers."
console.log("De afdeling Sales heeft " + departments.sales.numberOfEmployees + " medewerkers");

// Opdracht 1b:
// Marketing is een leuke afdeling om te werken. [beschrijving]."
console.log("Marketing is een leuke afdeling om te werken. " + departments.marketing.description);

// Opdracht 1c:
// "De afdeling Customer Service heeft [aantal] medewerkers"
console.log("De afdeling Customer Service heeft " + departments["customer-service"].numberOfEmployees + " medewerkers");

//opdracht 1d:
console.log("Sales is een uitdagende afdeling om te werken als Verkoopmanager. " + departments.sales.description);

//Opdracht 2 - prompten en beslissen
//opdracht 2a:
// const userInput = prompt('Over welke afdeling wil je meer informatie? ' +
//     'Kies uit: [marketing / sales / customer-service]');
// console.log(userInput);


// //opdracht 2b:
// const userInput = prompt('Over welke afdeling wil je meer informatie? ' +
//     'Kies uit: [marketing / sales / customer-service]');
// console.log(userInput);
//
// if (userInput === "marketing") {
//     console.log("Je koos marketing. " + departments.marketing.description);
// }
// else if (userInput === "sales") {
//     console.log("Je koos sales. " + departments.sales.description);
// }
// else if (userInput === "customer-service") {
//     console.log("Je koos customer-service. " + departments["customer-service"].description);
// }

// //opdracht 2c: incl console.error "Ongeldige keuze."
// const userInput = prompt('Over welke afdeling wil je meer informatie? ' +
//     'Kies uit: [marketing / sales / customer-service]');
// console.log(userInput);
//
// if (userInput === "marketing") {
//     console.log("Je koos marketing. " + departments.marketing.description);
// }
// else if (userInput === "sales") {
//     console.log("Je koos sales. " + departments.sales.description);
// }
// else if (userInput === "customer-service") {
//     console.log("Je koos customer-service. " + departments["customer-service"].description);
// }
// else {
//     console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen."); /!* je kunt hiervoor console.error() gebruiken in plaats van console.log().*!/
// }

/!*Opdracht 3 - een nieuwe prompt*!/
// Je koos marketing. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in.
// 0: [functietitel marketing 0],
//     1: [functietitel marketing 1],
//     2: [functietitel marketing 2],
//     3: [functietitel marketing 3]

const departmentInput = prompt('Over welke afdeling wil je meer informatie? ' +
    'Kies uit: [marketing / sales / customer-service]');

if (departmentInput === "marketing") {
    let jobOptions = "Je koos marketing. Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in.\n";
    jobOptions += "0: " + departments.marketing.jobs[0].title + "\n";
    jobOptions += "1: " + departments.marketing.jobs[1].title + "\n";
    jobOptions += "2: " + departments.marketing.jobs[2].title + "\n";
    jobOptions += "3: " + departments.marketing.jobs[3].title;

    let jobInput = prompt(jobOptions);
    let jobIndex = parseInt(jobInput); /!*zet de string om naar een getal*!/
    console.log(jobInput);

    const chosenJob = departments.marketing.jobs[jobIndex];
    console.log("Je koos " + chosenJob.title + ". Een uitdagende rol! " + chosenJob.description);

    let jobDescription = prompt(chosenJob);
    console.log(jobDescription);

}

*/
