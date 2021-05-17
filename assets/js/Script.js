let cards;

document.getElementById("sofa").addEventListener('click', () => {
    fetch("assets/JSON/Merchandise.json")
        .then(response => response.json())
        .then(data => data.sofa.map(item => {
            console.log(data.sofa);
            cards +=
                `
                <div class="col-md-3 card m-2">
                    <div class="row g-0 text-align-center">
                <div class="card text-center" >
                    <img src="${item.poster_path}" class="card-img-top" alt="photo produit">
                    <div class="card-body">
                        <h5 class="card-title">${item.original_title}</h5>
                        <p class="card-text">${item.overview}</p>
                        <p class="card-text"><small class="text-muted bold">${item.price} €</small></p>
                    </div>
                    <div class="card-footer">
                            <label for="q">Quantité : </label>
                            <select id="qt" name="q">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                            </select>
                        <button type="button" class="btn btn-primary ms-2" data-id="${item.id}" data-name="${item.original_title}" data-price="${item.price}">Ajouter au panier</button>
                    </div>
                </div>
                </div>
                </div>  
        `
                ;

        })).then(() => {

            document.getElementById("products").innerHTML = cards;
            cards = "";
            document.getElementById("carouselExampleControls").style.display = "none";
            document.getElementById("cardspromo").style.display = "none";
        })


}
)


document.getElementById("table").addEventListener('click', () => {
    fetch("assets/JSON/Merchandise.json")
        .then(response => response.json())
        .then(data => data.table.map(item => {
            console.log(data.table);
            cards +=
                `
                <div class="col-md-3 card m-2">
                    <div class="row g-0 text-align-center">
                <div class="card text-center" >
                    <img src="${item.poster_path}" class="card-img-top" alt="photo produit">
                    <div class="card-body">
                        <h5 class="card-title">${item.original_title}</h5>
                        <p class="card-text">${item.overview}</p>
                        <p class="card-text"><small class="text-muted bold">${item.price} €</small></p>
                    </div>
                    <div class="card-footer">
                            <label for="q">Quantité : </label>
                            <select id="qt" name="q">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                            </select>
                        <button type="button" class="btn btn-primary ms-2" data-id="${item.id}" data-name="${item.original_title}" data-price="${item.price}">Ajouter au panier</button>
                    </div>
                </div>
                </div></div>
        `
                ;
        }))
        .then(() => {
            document.getElementById("products").innerHTML = cards;
            cards = "";
            document.getElementById("carouselExampleControls").style.display = "none";
            document.getElementById("cardspromo").style.display = "none";
        })
})

document.getElementById("armchair").addEventListener('click', () => {
    fetch("assets/JSON/Merchandise.json")
        .then(response => response.json())
        .then(data => data.armchair.map(item => {
            console.log(data.armchair);
            cards +=
                `
                <div class="col-md-3 card m-2">
                    <div class="row g-0 text-align-center">
                        <div class="card text-center" >
                            <img src="${item.poster_path}" class="card-img-top" alt="photo produit">
                            <div class="card-body">
                                <h5 class="card-title">${item.original_title}</h5>
                                <p class="card-text">${item.overview}</p>
                                <p class="card-text"><small class="text-muted bold">${item.price} €</small></p>
                            </div>
                            <div class="card-footer">
                            <label for="q">Quantité : </label>
                            <select id="qt" name="q">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                            </select>
                            <button type="button" class="btn btn-primary ms-2" data-id="${item.id}" data-name="${item.original_title}" data-price="${item.price}">Ajouter au panier</button>
                        </div>
                        </div>
                        
                    </div>
                </div>
        `
                ;

        }))
        .then(() => {
            document.getElementById("products").innerHTML = cards;
            cards = "";
            document.getElementById("carouselExampleControls").style.display = "none";
            document.getElementById("cardspromo").style.display = "none";
        })
})

function checkPassword() {
    let password = document.querySelector('#password');
    let confirmPassword = document.querySelector('#confirmPassword');

    if (password.value === confirmPassword.value) {
        password.style.border = '2px solid green';
        confirmPassword.style.border = '2px solid green';
    } else {
        password.style.border = '2px solid red';
        confirmPassword.style.border = '2px solid red';
    }
};
document.querySelector('#submit1').addEventListener('click', checkPassword);

function testregexname() {
  let namejs = document.getElementById('pseudo').value;
  let regexname = /^[a-zA-Z]{2,100}$/;

  if (namejs.match(regexname)) {
        document.getElementById('pseudo').style.border = '2px solid green';
        document.getElementById('pseudo').style.border = '';
  }

  else {
        document.getElementById('pseudo').style.border = '2px solid red';
  }
}

function testregexmail() {

  let mailjs = document.getElementById('email').value;
  let regexmail = /^([\w-.]+)@((?:[\w]+.)+)([a-zA-Z]{2,4})/;

  if (mailjs.match(regexmail)) {
        document.getElementById('email').style.border = '2px solid green';
        document.getElementById('email').style.border = '';
  }

  else {
        document.getElementById('email').style.border = '2px solid red';
  }
}

document.querySelector('#pseudo').addEventListener('keyup', testregexname);
document.querySelector('#email').addEventListener('keyup', testregexmail);

