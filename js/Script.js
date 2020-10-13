function CheckIfCanParty() {
    console.log("Check If Can Party")
    var grade = 98
    var didHomework = true
    const htmlElement = document.getElementById("PartyResultBox")

    if(grade > 89 && didHomework == true) {
        console.log("Go Party")
        htmlElement.value = "Go Party"
    } else {
        console.log("Stay Home")
        htmlElement.value = "Stay Home"
    }
}