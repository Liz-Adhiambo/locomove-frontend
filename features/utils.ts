function getUrl() {
    let user;

    try {
        user = window.localStorage.getItem("user");
    } catch (e) {
        throw new Error("User not found");
    }

    if (user == "mover") {
        return "/mover/signup";
    } else {
        return "/user/signup";
    }
}

