import { apiUrl, reposQuantity } from "../variables.js";
async function getUserRepositories (userName) {
    const response = await fetch(`${apiUrl}/${userName}/repos?per_page=${reposQuantity}`);
    return await response.json();
}

export { getUserRepositories }