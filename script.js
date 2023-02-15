const data = [
    {
      "id": 1,
      "title": "Bok 1",
      "body": "quia et suscipitsuscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      "readCount": 10
    },
    {
      "id": 2,
      "title": "Bok 2",
      "body": "est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores nequefugiat blanditiis voluptate porro vel nihil molestiae ut reiciendisqui aperiam non debitis possimus qui neque nisi nulla",
      "readCount": 300
    },
    {
      "id": 3,
      "title": "Bok 3",
      "body": "et iusto sed quo iurevoluptatem occaecati omnis eligendi aut advoluptatem doloribus vel accusantium quis pariaturmolestiae porro eius odio et labore et velit aut",
      "readCount": 80
    },
    {
      "id": 4,
      "title": "Bok 4",
      "body": "ullam et saepe reiciendis voluptatem adipiscisit amet autem assumenda provident rerum culpaquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      "readCount": 200
    },
    {
      "id": 5,
      "title": "Bok 5",
      "body": "repudiandae veniam quaerat sunt sedalias aut fugiat sit autem sed estvoluptatem omnis possimus esse voluptatibus quisest aut tenetur dolor neque",
      "readCount": 109
    }
  ]
  


var button = document.querySelector(".btn").addEventListener("click", function () {    
    
    const bookName = document.querySelector(".input").value;    
    
    data.forEach(element => {                
        
        if (element.title == bookName) {            
            
            document.querySelector(".container2").innerHTML = "";

            const divElement = document.createElement("div")            
            divElement.classList = `cont${element.id}`            
            document.querySelector(".container2").appendChild(divElement);                        
            
            const hElement = document.createElement("h1")            
            hElement.classList = `htag${element.id}`            
            hElement.innerHTML = element.title;            
            document.querySelector(`.cont${element.id}`).appendChild(hElement);            
            
            const pElement1 = document.createElement("p")            
            pElement1.classList = `pTag${element.id}`            
            pElement1.innerHTML = element.body;            
            document.querySelector(`.cont${element.id}`).appendChild(pElement1);            
            
            const pElement2 = document.createElement("p")            
            pElement2.classList = `reading${element.id}`            
            pElement2.innerHTML = element.readCount;            
            document.querySelector(`.cont${element.id}`).appendChild(pElement2);
            
        }
    });
}

)

var button = document.querySelector(".btn2").addEventListener("click", function () {
    const bookName = document.querySelector(".input").value;
    document.querySelector(".container2").innerHTML = "";
    data.forEach(element => {
        
        const divElement = document.createElement("div")
        divElement.classList = `cont${element.id}`
        document.querySelector(".container2").appendChild(divElement);

        const hElement = document.createElement("h1")
        hElement.classList = `htag${element.id}`
        hElement.innerHTML = element.title;
        document.querySelector(`.cont${element.id}`).appendChild(hElement);

        const pElement1 = document.createElement("p")
        pElement1.classList = `pTag${element.id}`
        pElement1.innerHTML = element.body;
        document.querySelector(`.cont${element.id}`).appendChild(pElement1);

        const pElement2 = document.createElement("p")
        pElement2.classList = `pTag${element.id}`
        pElement1.innerHTML = element.body;
        document.querySelector(`.cont${element.id}`).appendChild(pElement2);


    });
}
)