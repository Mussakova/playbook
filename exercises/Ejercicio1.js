const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
        return `This repository ${this.name} was created by ${this.author}`
    }
}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

// EJercicio propio. Construyendo Issue 
const Issue = {
    title: 'HotFix Pasarela de pagos',
    repositoryNameAssociated: 'Muebles y Madera',
    status: 'Hotfix Pasarela de Pagos',
    numberOfComments: 123,
    labels: {
        bug: 'Something is not working',
        documentation: "Improvements or additions to documentation",
        duplicate: 'This issue or pull request already exists',
        enhancement: 'New feature or request',
        help_wanted: "Extra attention is needed",
        invalid:"This doesn't seem right",     
        question: 'Further information is requested',
        wontfix:'This will not be worked on'
    },
    author: "Hirepan",
    dateCreated: "14 de Diciembre de 2021",
    lastUpdated: Date(),

    getTitleAndAuthor(){
    return ` El autor del Issue "${this.title}" es ${this.author}`
    },

    getGeneralInfo(){
        return "Este objeto contiene la información necesaria para definir un Issue"
    }
}
console.log(Issue.author);
console.log( Issue.labels);
console.log(Issue.getGeneralInfo());
console.log(Issue.getTitleAndAuthor());

