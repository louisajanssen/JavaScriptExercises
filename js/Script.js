function CheckIfCanParty() {
    console.log("Check If Can Party")
    const gradeInput = document.getElementById("grade")
    const homeworkInput = document.getElementById("homework")
    console.log(gradeInput.value)
    console.log(homworkInput.value)
    var grade = 98
    var didHomework = true
    const partyResult = document.getElementById("PartyResultBox")

    if(grade > 89 && didHomework == true) {
        console.log("Go Party")
        partyResult.value = "Go Party"
    } else {
        console.log("Stay Home")
        partyResult.value = "Stay Home"
    }
}