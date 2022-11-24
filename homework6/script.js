const userProfile = document.getElementById("profile");
const keypressCreateInput = document.querySelector('input');
let currentSearchLogin = '';
const listRepository = document.createElement("ul");
listRepository.className = "list-repository";

const blockRepositories = document.createElement("div");
blockRepositories.className = "repositories-block"

const languageFilter = document.createElement("select");
const sort = document.createElement("select")
const sortByName = document.createElement("option");
const sortByLastUpdate = document.createElement("option");
sort.className = "sort"
sortByName.value = "Name";
sortByName.innerText = "Name";
sortByLastUpdate.value = "Last Update";
sortByLastUpdate.innerText = "Last Update";

sort.appendChild(sortByName);
sort.appendChild(sortByLastUpdate)

languageFilter.className = "language-filter";

const createNewItemByKeypress = (value) => {
    value.addEventListener('keypress', () => {
        if (event.key === "Enter") {
            document.getElementById("loader").style.display = "block";
            const userName = document.querySelector("input").value
            if (currentSearchLogin.length) {
                if (currentSearchLogin !== userName) {
                    userProfile.innerText = "";
                    languageFilter.innerText = ""
                    getUserDataByLogin(userName).then(() => currentSearchLogin = userName)
                }
            } else {
                getUserDataByLogin(userName).then(() => currentSearchLogin = userName)
            }
        }
    })
}
createNewItemByKeypress(keypressCreateInput)

const createProfilePage = (data) => {
    const repositories = getUserRepositories(data.repos_url)
    const imageProfile = document.createElement("img");
    const login = document.createElement("h1");
    const divProfile = document.createElement("div")

    imageProfile.src = data.avatar_url;
    imageProfile.alt = data.login;
    imageProfile.className = "image-profile";

    login.innerText = data.login;
    login.className = "login";

    divProfile.className = "profile-block"
    divProfile.appendChild(imageProfile);
    divProfile.appendChild(login);

    userProfile.appendChild(divProfile)
}

const getUserDataByLogin = async (name) => {
    return fetch(`https://api.github.com/users/${name}`)
        .then((response) => response.json())
        .then((data) => {
                createProfilePage(data)
                document.getElementById("loader").style.display = "none";
            }
        );
}

const drawRepositoriesList = (repositories) => {
    const languageArray = [];
    let uniqueLanguageArray = [];

    repositories.forEach((item) => {
        languageArray.push(item.language);
        uniqueLanguageArray = [...new Set(languageArray)]
    });

    ["All", ...uniqueLanguageArray].forEach((item) => {

        if (item !== null) {
            const languageSortValueAll = document.createElement("option");
            languageSortValueAll.value = item;
            languageSortValueAll.innerText = item;
            languageFilter.appendChild(languageSortValueAll);


        }
    })

    createListRepositories(repositories)
    languageFilter.addEventListener("change", (e) => {
        if (e.target.value !== "All") {
            listRepository.innerHTML = "";
            const filter = repositories.filter((item) => {
                return item.language === e.target.value
            })
            createListRepositories(filter);
            sortFunction(filter)
        } else {
            createListRepositories(repositories);
            sortFunction(repositories)
        }
    })

    const sortFunction = (value) => {
        sort.addEventListener("change", (e) => {
            if (e.target.value === "Name") {
                listRepository.innerHTML = "";
                const sortName = value.sort((a, b) => {
                    return a.name.localeCompare(b.name)
                })
                createListRepositories(sortName);
            } else {
                const sortByLastUpdate = value.sort((a, b) => {
                    return a.updated_at.localeCompare(b.updated_at)
                })
                createListRepositories(sortByLastUpdate);
            }
        })
    }
    sortFunction(repositories)

    blockRepositories.appendChild(languageFilter);
    blockRepositories.appendChild(sort);
    blockRepositories.appendChild(listRepository)
}

const getUserRepositories = async (data) => {
    return fetch(`${data}`)
        .then((response) => response.json())
        .then((repos) => {
                drawRepositoriesList(repos)
            }
        );
};

const createListRepositories = (value) => {
    listRepository.innerHTML = "";

    value.forEach((repo) => {
        const itemRepository = document.createElement("li")
        const linkRepository = document.createElement("a");
        const isRepositoryPublic = document.createElement("span");
        const divLastUpdate = document.createElement("div");
        const spanLastUpdate = document.createElement("span");
        const spanLanguageCircle = document.createElement("span");
        const spanLanguage = document.createElement("span");

        itemRepository.className = "list-repositories";

        linkRepository.innerText = repo.name;
        linkRepository.className = "link-repository";

        divLastUpdate.className = "last-update-none";
        itemRepository.style = "padding-bottom: 24px";
        linkRepository.onclick = () => {
            if (divLastUpdate.className === "last-update-none") {
                divLastUpdate.classList.remove("last-update-none");
                divLastUpdate.className = "last-update-block";
                itemRepository.style = "padding-bottom: 0";
            } else if (divLastUpdate.className === "last-update-block") {
                divLastUpdate.classList.remove("last-update-block");
                divLastUpdate.className = "last-update-none";
                itemRepository.style = "padding-bottom: 24px"
            }
        }

        spanLanguage.innerText = repo.language;
        spanLanguage.className = "language"

        const colors = {
            'JavaScript': '#f1e05a',
            'HTML': '#e34c26',
            'CSS': '#563d7c',
            'PHP': '#4F5D95',
            'Shell': '#89e051',
            'TypeScript': '#3178c6',
            'Java': '#b07219',
            'C#': '#178600',
            'C++': '#f34b7d',
            'C': '#555555'
        }

        spanLanguageCircle.className = "span-language-circle"
        spanLanguageCircle.style.background = colors[repo.language]

        if (repo.private === false) {
            isRepositoryPublic.innerText = "Public";
            isRepositoryPublic.className = "repository-value";
        }

        spanLastUpdate.innerText = `Updated ${repo.updated_at}`;
        spanLastUpdate.className = 'last-update';

        itemRepository.appendChild(linkRepository);
        itemRepository.appendChild(isRepositoryPublic);

        divLastUpdate.appendChild(spanLanguageCircle);
        divLastUpdate.appendChild(spanLanguage);
        divLastUpdate.appendChild(spanLastUpdate);

        itemRepository.appendChild(divLastUpdate);
        userProfile.appendChild(blockRepositories);
        listRepository.appendChild(itemRepository);
    })
}