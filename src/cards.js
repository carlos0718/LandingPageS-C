
let objCard = [
    {
        id : 1,
        src : "https://blog.redbus.pe/wp-content/uploads/2020/05/PORTADA-DESAYUNOS-e1590447113865.jpg",
        description : ""
    },
    {
        id : 2,
        src : "https://thefoodtech.com/wp-content/uploads/2020/06/jugos-y-n%C3%A9ctares.jpg",
        description : ""
    },
    {
        id : 3,
        src : "https://i0.wp.com/exitosanoticias.pe/v1/wp-content/uploads/2020/04/panc2.jpg",
        description : ""
    }/* ,
    {
        id : 4,
        src : "./assets/img/cocinerasChinas.jpg",
        description : ""
    },
    {
        id : 5,
        src : "./assets/img/cocineroPasta.jpg",
        description : ""
    },
    {
        id : 6,
        src : "./assets/img/dosCocineras.jpg",
        description : ""
    } */
]

for (const obj of objCard) {
    let cards = document.getElementById('section-cards')
    cards.innerHTML += ` <div class="col-md-4 mb-3">
                            <a href="#" class="recent-work card border-0 shadow-lg overflow-hidden">
                                <img class="recent-work-img card-img" src=${obj.src} alt="Card image">
                                <div class="recent-work-vertical card-img-overlay d-flex align-items-end">
                                    <div class="recent-work-content text-start mb-3 ml-3 text-dark">
                                        <!--  <h3 class="card-title light-300">Social Media</h3> -->
                                        <p class="card-text">${obj.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>`
    
}