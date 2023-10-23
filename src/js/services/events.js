import { apiUrl } from "../variables.js";

async function getEvents(userName) {
    const response = await fetch(`${apiUrl}/${userName}/events`);
    return await response.json();
}

export { getEvents }