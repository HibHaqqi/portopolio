const portfolioData =[
    {title: "proyek 1", description:"description proyek 1"},
    { title: "proyek 2", description:"description proyek 2"},
    { title: "proyek 3", description:"description proyek 3"}
];

const portfolioContainer = document.getElementById("portfolioContainer");

portfolioData.forEach(project => {
    const projectItem = document.createElement("div");
    projectItem.className = "item";
    projectItem.innerHTML = `
    <h2>${project.title}</h2>
    <p>${project.description}</p>
  `;
    portfolioContainer.appendChild(projectItem);
});

//section form search
const form =document.querySelector('form');
const item = document.querySelectorAll('.item');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const searchTerm = form.search.value.toLowerCase();
    item.forEach(item=>{
        const projectTitle = item.querySelector('h2').textContent.toLowerCase();
        const projectDescription = item.querySelector('p').textContent.toLowerCase();

        if(projectTitle.includes(searchTerm)|| projectDescription.includes(searchTerm)){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    });
});


