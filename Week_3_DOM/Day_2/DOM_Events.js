console.log("Events");

let body = document.body;

function button_click(){
    console.log("Button clicked!");
    let h1 = document.createElement("h1");
    h1.textContent = "Button clicked";
    body.appendChild(h1);
}

// Add event to a button
let btn2 = document.getElementById("btn-2");
// btn2.setAttribute("onlclick", "button_click()");
btn2.onclick = button_click; //name of function

let btnProfiles = document.getElementById('btn-3');
btnProfiles.onclick = create_profiles;

let main_div = document.createElement('div');
main_div.classList.add('main');

function create_profiles(){

    let js_ft_class = [
        {id: 1, user: "Damien", email: "damien@developers.institute"},
        {id: 2, user: "Oliver", email: "oliver@javascript.com"},
        {id : 3, user: "Dheeksha", email: "dheeksha@developers.institute"},
        {id: 4, user: "Wayne", email: "wayne@batman.com"},
        {id: 5, user: "Henry", email: "henry@tesla.com"}
    ]
    
    for(let person of js_ft_class){
        console.log(person);
    
        let div = document.createElement('div');
        div.setAttribute('class', 'profiles');

        let img = document.createElement('img');
        img.setAttribute('src', `https://robohash.org/${person.id}?size=200x200`);
        div.appendChild(img);
    
        let h3 = document.createElement('h3');
        h3.textContent = person.user;
        div.appendChild(h3);
    
        let email = document.createElement('h4');
        email.textContent = person.email;
        div.appendChild(email);
    
        main_div.appendChild(div);
    
    }
    body.appendChild(main_div);
}

// Add an event listener
btn2.addEventListener('click', function(){
    // console.log(ev);
    console.log('button 2 has been clicked');
    ev.stop
})

let div1 = document.getElementById('div1');

div1.addEventListener('click', function(ev){
    console.log('Div 1 has been clicked');
})

// Exercise 1 - Insert row
function insertRow(){
    console.log('Inserting row...')
    
    let table = document.getElementById('sampleTable');
    // console.log(table);

    let row = document.createElement('tr');

    let cell1 = document.createElement('td');
    cell1.textContent = 'Cell 1';
    row.appendChild(cell1)

    let cell2 = document.createElement('td');
    cell2.textContent = 'Cell 2';
    row.appendChild(cell2);
    
    table.appendChild(row);
}