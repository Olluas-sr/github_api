import { apiUrl } from "../variables.js";

async function getUser(userName) {
    const response = await fetch(`${apiUrl}/${userName}`);
    return await response.json();
}

export { getUser }