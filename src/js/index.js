import { getUser } from "./services/user.js";
import { getUserRepositories } from "./services/repositories.js";
import { user } from "./objects/user.js";
import { screen } from "./objects/screen.js";
import { getEvents } from "./services/events.js";

document.getElementById('btn-search').addEventListener('click', () => {
        const userName = document.getElementById('input-search').value;
        if(validateEmptyInput(userName)) return
        setUserData(userName);
})

document.getElementById('input-search').addEventListener('keyup', (e) =>{
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterPressed = key === 13
    if(isEnterPressed){
        if(validateEmptyInput(userName)) return
        setUserData(userName);
    }
})

async function setUserData(userName){
    const userReponse = await getUser(userName)
    if(userReponse.message === "Not Found"){
        screen.renderNotFound()
        return
    }
    const repositoriesResponse = await getUserRepositories(userName);
    const eventsResponse = await getEvents(userName);
    
    user.setinfo(userReponse)
    user.setRepositories(repositoriesResponse)
    console.log(repositoriesResponse);
    user.setEvents(eventsResponse)
    screen.renderUser(user)
}

function validateEmptyInput(userName){
    if(userName.length === 0){
        alert('Preencha o campo com o nome do usuario do Github ')
        return true
    }
}