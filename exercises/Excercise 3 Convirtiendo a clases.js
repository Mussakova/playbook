// const repo = {
//     name: "LaunchX",
//     author: "carlogilmar",
//     language: "JavaScript",
//     numberOfCommits: 100,
//     stars: 199,
//     forks: 299,
//     issues_open: 10,
//     issues_close: 10,
//     getTotalIssues: function(){
//         return this.issues_open + this.issues_close
//     },
//     getGeneralInfo: function(){
//         return `This repository ${this.name} was created by ${this.author}`
//     }
// }

// // EJercicio propio. Construyendo Issue 
// const Issue = {
//     title: 'HotFix Pasarela de pagos',
//     repositoryNameAssociated: 'Muebles y Madera',
//     status: 'Hotfix Pasarela de Pagos',
//     numberOfComments: 123,
//     labels: {
//         bug: 'Something is not working',
//         documentation: "Improvements or additions to documentation",
//         duplicate: 'This issue or pull request already exists',
//         enhancement: 'New feature or request',
//         help_wanted: "Extra attention is needed",
//         invalid:"This doesn't seem right",     
//         question: 'Further information is requested',
//         wontfix:'This will not be worked on'
//     },
//     author: "Hirepan",
//     dateCreated: "14 de Diciembre de 2021",
//     lastUpdated: Date(),

//     getTitleAndAuthor(){
//     return ` El autor del Issue "${this.title}" es ${this.author}`
//     },

//     getGeneralInfo(){
//         return "Este objeto contiene la información necesaria para definir un Issue"
//     }
// }

// // Ejercicio de Pull Request
// const PullRequest = {
//     title: "Nueva Seccion de Comedores",
//     author: 'Hirepan',
//     branchName: 'Comedores y Cocina',
//     dateCreated: '14 de Mayo de 2022',
//     status:'Building',
//     repositoryNameAssociated: 'Muebles y Madera',

//     getStatus(){
//         return `El estado de este repositorio es: "${this.status}"`
//     },
//     getTitleAndAutor(){
//         return `El autor de este Pull Request: "${this.title}", es ${this.author}`
//     },
// }

// // Añadiendo Facebook. Jaja
// const fb ={
//     user: {name: "Hirepan", nickname: "Sgy", bio: "...", age: 23, job: 'Student'},
//     posts: {meta_img:"camera upload", description:"tumblr", reactions: {feliz:'hahaha', triste:'sad', enojado:'angry'}, share: 'button share'},
//     messages: {contacts: 'list of contacts', container:'blank space', send: 'Send button'}
// }

// // Añadiendo Twitter
// const Twitter = {
//     user: {name: "Hirepan", nickname: "Sgy", bio: "...", age: 23},
//     trending:{date: Date(), topic:'Ecology', retweets: 4321},  
//     hashtag: '#Ecology'
// }


// // Añadiendo Ubber. No he usado uber no conozco la aplicación. Pero dejo lo que me imagino
// const ubber = {
//     mapas: {ubicacionActual: `import GPS location`, arriveDestiny: 'inserte ubicación en el mapa'},
//     drivers_available: ['driver1', 'driver2', 'driver3'],
//     choosing: {distanceAway: ['far', 'Very Far', 'Very Far Away', 'Close'], price:{dlls10:'cheap', dlls50:'expensive', dlls200:'Slv, Vuela o qué onda Jajaja'}}
// }

class redesSociales{
constructor(user, messages, friends, followers, ipDireccion){
    this.usuario = user,
    this.mensajes = messages,
    this.amigos = friends,
    this.seguidores = followers,
    this._ipDireccion = ipDireccion
}
}

class fbHeredado extends redesSociales{
    constructor(user, messages, friends, followers, ipDireccion, topic_post, reacciones){
        super(user, messages, friends, followers, ipDireccion),
        this._topic_post = topic_post,
        this._reacciones = reacciones
    }
}
class twHeredado extends redesSociales{
    constructor(user, messages, friends, followers, ipDireccion, retwits, hashtags){
        super(user, messages, friends, followers, ipDireccion),
        this._retwits = retwits,
        this._hashtags = hashtags
    }
}
class ubberHeredado extends redesSociales{
    constructor(user, messages, friends, followers, ipDireccion, location, ubber_available){
        super(user, messages, friends, followers, ipDireccion),
        this._location = location,
        this._ubber_available = ubber_available
}
}
let redsocial = new redesSociales('Alyrezza', 'any', 1234, 654321, '192.168')
console.log(redsocial);

let fb = new fbHeredado('Hirepan', 35, 123, 543, '192.168.0.0', 'memes', 'Hahahaha')
console.log(fb);

let twitter = new twHeredado('Azahyra', 'Hola Mundo', 12345, 1234567, '123.123.123')
console.log(twitter);

let ubber = new ubberHeredado('Efrey', {ana: 'Hi dear', albert: 'Hi bro'}, {ana: 'since 2021', albert: 'since 1987'}, 1234567, '123.123.12.312.3', 'Morelia, MX', [{nameUbber: 'juan', distanceKmAway: 30, priceMXN: 1234}, {nameUbber: 'Ale', distanceKmAway: 12, priceMXN: 432} ])
console.log(ubber);