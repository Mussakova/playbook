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

// Ejercicio de Pull Request
const PullRequest = {
    title: "Nueva Seccion de Comedores",
    author: 'Hirepan',
    branchName: 'Comedores y Cocina',
    dateCreated: '14 de Mayo de 2022',
    status:'Building',
    repositoryNameAssociated: 'Muebles y Madera',

    getStatus(){
        return `El estado de este repositorio es: "${this.status}"`
    },
    getTitleAndAutor(){
        return `El autor de este Pull Request: "${this.title}", es ${this.author}`
    },
}
console.log(PullRequest.title);
console.log(PullRequest.branchName);
console.log(PullRequest.getStatus());
console.log(PullRequest.getTitleAndAutor());

// Añadiendo Facebook. Jaja
const fb ={
    user: {name: "Hirepan", nickname: "Sgy", bio: "...", age: 23, job: 'Student'},
    posts: {meta_img:"camera upload", description:"tumblr", reactions: {feliz:'hahaha', triste:'sad', enojado:'angry'}, share: 'button share'},
    messages: {contacts: 'list of contacts', container:'blank space', send: 'Send button'}
}
console.log(fb.user.name);
console.log(fb.posts.reactions.feliz);

// Añadiendo Twitter
const Twitter = {
    user: {name: "Hirepan", nickname: "Sgy", bio: "...", age: 23},
    trending:{date: Date(), topic:'Ecology', retweets: 4321},  
    hashtag: '#Ecology'
}
console.log(Twitter.trending.date);
console.log(Twitter.user.nickname);
// Añadiendo Ubber. No he usado uber no conozco la aplicación. Pero dejo lo que me imagino
const ubber = {
    mapas: {ubicacionActual: `import GPS location`, arriveDestiny: 'inserte ubicación en el mapa'},
    drivers_available: ['driver1', 'driver2', 'driver3'],
    choosing: {distanceAway: ['far', 'Very Far', 'Very Far Away', 'Close'], price:{dlls10:'cheap', dlls50:'expensive', dlls200:'Slv, Vuela o qué onda Jajaja'}}
}
console.log(ubber.choosing.distanceAway);
console.log(ubber.choosing.price);
console.log(ubber.mapas);
console.log(ubber.drivers_available);
    
