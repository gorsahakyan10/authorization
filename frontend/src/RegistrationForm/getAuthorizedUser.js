import registration from "./registration";

async function getAuthorizedUser(userData) {
    const errors = await registration({ ...userData });
    if (errors.length > 0) {
        return {alreadyExist: true};
    }
    const response = await fetch("http://localhost:8000/user", {
        method: "POST",
        body: JSON.stringify({ username: userData.username }),
    });

    const user = await response.json();

    return user;
}

export default getAuthorizedUser;
