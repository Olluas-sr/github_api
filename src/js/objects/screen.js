const screen ={
    userProfile: document.querySelector('.profile-data'),
    
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                            <img src="${user.avatarUrl}" alt="imagem do usuario">
                            <div class="data">
                                <h1>${user.name ?? 'Usuario nao possui nome cadastrado 😥'}</h1>
                                <p>${user.bio ?? 'Usuario nao possui bio cadastrada 😥' }</p>
                                <p>Seguidores: ${user.followers}</p>
                                <p>Sguindo: ${user.following}</p>
                            </div>
                        </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                    <a href="${repo.html_url}" target = "_blank">${repo.name}
                                                                        <div class= "repo-container">
                                                                            <p class="repo-box">📚 ${repo.forks}</p>
                                                                            <p class="repo-box">⭐ ${repo.stargazers_count}</p>
                                                                            <p class="repo-box">👀 ${repo.watchers}</p>
                                                                            <p class="repo-box">👨‍💻 ${repo.language} </p>
                                                                        </div>
                                                                    </a>
                                                                </li>`)
        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositorios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }
        let eventsItens = ''
        user.events.forEach(event => eventsItens += `<li><h4>${event.repo.name}</h4> <p> -${event.type}- </p> </li> `)
        if (user.events.type === "CreateEvent" || "PushEvent") {
            this.userProfile.innerHTML += `<div class="events section"> 
                                                <h2>Eventos</h2>
                                                <ul>${eventsItens}</ul>
                                            </div>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuario nao encontrado 👀</h3>"
    },

}

export { screen }