function age() {
    let age = document.getElementById("box").value

    if (age > 18) {
        document.write("You are not a kid. You are a Adult Person");
    }

    if (age < 18) {
        document.write("You are a kid. Because your age is " + age);
    }

    if (age > 60) {
        document.write(" You are a old person");
    }
}