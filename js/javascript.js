function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;


if (name == "" || birthDate == "" || gender == "" || messages == "") {
    alert("Cannot Be Emptied!");
    return false;
}

setSenderUI(name, birthDate, gender, messages);

return false;
}