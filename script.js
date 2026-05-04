    function calculateResult() {
    const form = document.getElementById("quizForm");

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    let cyber = 0;
    let design = 0;
    let web = 0;
    let data = 0;

    const answers = new FormData(form);

    for (let value of answers.values()) {
        if (value === "cyber") cyber++;
        if (value === "design") design++;
        if (value === "web") web++;
        if (value === "data") data++;
    }

    let result = "";
    let message = "";

    if (cyber >= design && cyber >= web && cyber >= data) {
        result = "Cybersecurity";
        message = "You enjoy problem solving and using security tools. Cybersecurity can help you break into the world of protecting systems and information.";
    } 
    else if (design >= cyber && design >= web && design >= data) {
        result = "Animation and Visual Effects";
        message = "You enjoy being creative and artistic. AVE will allow you to apply this to your work, whether it's Animation or Themed Entertainment.";
    } 
    else if (web >= cyber && web >= design && web >= data) {
        result = "Web Programming and Design";
        message = "You enjoy building things and working with websites and applications.Web Programming and Design will give you a broad idea of these topics.";
    } 
    else {
        result = "Data Analytics, Technologies and Applications";
        message = "You enjoy working with data, patterns, and making sense of information. This program will challenge you in all of this!";
    }

    document.getElementById("result").innerHTML = `
        <div class="alert alert-warning">
        <h4>Your result: ${result}</h4>
        <p>${message}</p>
        </div>
    `;
    }