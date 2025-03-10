document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.getElementById("search");
    const searchContainer = document.getElementById("Search-Container");
    const searchInput = document.getElementById("search-input");

    searchIcon.addEventListener("click", function () {
        searchContainer.classList.toggle("active");
    });
});

function scrollToNext(nextId) {
    var nextElem = document.getElementById('Für-übergang');
    if (nextElem) {
        window.scrollTo({
            top: nextElem.offsetTop,
            behavior: "smooth"
        });
    }
}
function scrollToNext2(nextId) {
    var nextElem = document.getElementById('Für-übergang2');
    if (nextElem) {
        window.scrollTo({
            top: nextElem.offsetTop,
            behavior: "smooth",
        });
    }
}
function scrollToNext3(nextId) {
    var nextElem = document.getElementById('Für-übergang3');
    if (nextElem) {
        window.scrollTo({
            top: nextElem.offsetTop,
            behavior: "smooth",
        });
    }
}
function scrollToNext4(nextId) {
    var nextElem = document.getElementById('Für-übergang4');
    if (nextElem) {
        window.scrollTo({
            top: nextElem.offsetTop,
            behavior: "smooth",
        });
    }
}
function scrollupTologo(nextId) {
    var nextElem = document.getElementById('Logo');
    if (nextElem) {
        window.scrollTo({
            top: nextElem.offsetTop,
            behavior: "smooth",
        });
    }
}

// Chat-bot API 

document.getElementById("button").addEventListener("click", function() {
    Ki();
});
function Ki() {
    const input = document.getElementById('user-input').value;
    const Frage1 = "Was ist eine ki?";
    const frage2 = "Was kann eine KI besser als ein Mensch?";
    var Randomnumber = Math.floor(Math.random() * 4);
    let Antwort = "";
    const chatContainer = document.getElementById('Ai-kommentare');

    document.getElementById('Chatbot-Logo').style.display = 'none';
    document.getElementById('Chatbot-Logo-h1').style.display = 'none';


    


    let userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.innerHTML = ` ${input}`;
    chatContainer.appendChild(userMessage);

    let loadingGif = document.createElement('img');
    loadingGif.src = "img/loading.gif"; 
    loadingGif.className = 'loading-gif';
    chatContainer.appendChild(loadingGif);

    
    if (input.toLowerCase() === Frage1.toLowerCase()) {
        let antworten = [
            "Eine Künstliche Intelligenz (KI) ist ein Bereich der Informatik, der sich mit der Entwicklung von Systemen befasst, die menschenähnliches Denken und Handeln nachahmen können. Sie basiert auf Algorithmen, maschinellem Lernen und neuronalen Netzwerken, um Daten zu analysieren, Muster zu erkennen und eigenständig Entscheidungen zu treffen.",
            "KI begegnet uns im täglichen Leben in vielen Formen, etwa in Sprachassistenten wie Siri oder Alexa, in personalisierten Empfehlungen auf Netflix oder Amazon oder in Navigationssystemen, die die schnellste Route berechnen. Sie erleichtert viele Aufgaben, indem sie Informationen verarbeitet und uns passende Lösungen bietet.",
            "Im wissenschaftlichen Bereich wird KI genutzt, um große Datenmengen zu analysieren, medizinische Diagnosen zu verbessern oder neue Materialien zu entdecken. Mit Hilfe von Deep Learning und neuronalen Netzwerken kann KI eigenständig lernen, indem sie Muster in Daten erkennt und daraus Schlussfolgerungen zieht, ohne dass sie explizit programmiert wurde.",
            "In der Wirtschaft wird KI eingesetzt, um Prozesse zu automatisieren, Arbeitsabläufe effizienter zu gestalten und Kosten zu senken. Unternehmen nutzen KI beispielsweise für Chatbots im Kundenservice, zur Vorhersage von Markttrends oder in der industriellen Fertigung zur Qualitätskontrolle. KI wird als einer der wichtigsten Treiber der Digitalisierung und zukünftigen Wirtschaftsentwicklung gesehen."
        ];
        Antwort = antworten[Randomnumber];
    } 
    else if(input.toLowerCase() === frage2.toLowerCase()){
        let antworten = [
            "“Künstliche Intelligenz kann in sehr kurzer Zeit riesige Datenmengen analysieren und Muster erkennen, die für das menschliche Auge kaum sichtbar wären. Zum Beispiel kann eine KI in der Medizin durch das Durchsuchen von Millionen von Patientenakten schneller als ein Arzt eine mögliche Diagnose stellen oder bei der Finanzanalyse zukünftige Markttrends mit hoher Wahrscheinlichkeit vorhersagen.”.",
            "Während ein Mensch irgendwann müde wird und eine Pause braucht, kann eine KI rund um die Uhr arbeiten, ohne Konzentrationsverlust oder Leistungseinbrüche. Das macht sie besonders nützlich in Bereichen wie der automatisierten Kundenbetreuung, wo Chatbots jederzeit auf Anfragen reagieren können, oder in der industriellen Produktion, wo Roboter mit KI-Präzision immer gleichbleibende Qualität liefern.",
            "KI kann mathematische Berechnungen und komplexe Simulationen viel schneller durchführen als ein Mensch. In der Wissenschaft wird sie zum Beispiel eingesetzt, um neue Medikamente zu entwickeln oder physikalische Prozesse zu simulieren, die in der Realität zu lange dauern würden oder zu teuer wären.",
            "Ein weiterer Vorteil von KI ist ihre Fähigkeit, riesige Datenbanken zu durchsuchen und in Echtzeit relevante Informationen bereitzustellen. Während ein Mensch in einem Buch oder einer Datenbank nach Antworten suchen müsste, kann eine KI innerhalb von Millisekunden genau das passende Ergebnis liefern."
        ];
        Antwort = antworten[Randomnumber];
    }
    
    else {
        Antwort = "Funktioniert nicht.";
    }

    setTimeout(() => {

    }, 2000);


    setTimeout(() => {

        loadingGif.remove();
        let botMessage = document.createElement('div');
        botMessage.className = 'bot-message';
        botMessage.innerHTML = `${Antwort}`;
        chatContainer.appendChild(botMessage);


        botMessage.animate([
            { opacity: 0, transform: "translateX(-10px)" },
            { opacity: 1, transform: "translateX(0)" }
        ], {
            duration: 2000,
            fill: "forwards",
            easing: "ease-out"
        });


        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 2000);
}