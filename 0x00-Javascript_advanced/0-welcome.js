function welcome(firstName, lastName) {
    const fullName = (`${firstName} ${lastName}`);
    alert(`Welcome ${fullName}!`);
    function displayFullName() {
        alert(`${fullName}`);
    }
    displayFullName();
}