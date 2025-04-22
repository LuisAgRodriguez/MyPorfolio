const datas = async () => {
    try {
      const respuesta = await fetch("./data.json");
      const data = await respuesta.json();
        addProjects(data)
    } catch (error) {
      console.log("Hubo un error en cargar los datos", error);
    }
  };
  
  document.addEventListener("DOMContentLoaded", datas);
  
const thirdSectionProject = document.getElementById("third-section");

const addProjects = (data) => {
    data.projects.forEach((project) => {
        thirdSectionProject.innerHTML += `
        <div class="third-section-project">
            <div class="project-image">
                <img src="${project.image}" alt="Proyecto" >                
            </div>
                <div class="project-desciption">
                    <h3>${project.title}</h3>
                    <p class="project-type-file">
                        <i class="${project["types-files-html"]}"></i>
                        <i class="${project["types-files-css"]}"></i>
                        <i class="${project["types-files-js"]}"></i>
                        ${project["types-files-json"] ? `<i class="${project["types-files-json"]}"></i>` : ""}
                    </p>
                    <p class="description">${project.description}</p>
                    <a href="${project.link}" target="_blank"><i class="nf nf-md-github"></i></a>
                    <a href="" target="_blank"><i class="nf nf-md-link_box_variant"></i></a>
                </div>
            </div>
    `;
    });

}
  
const lightMode = document.querySelector("header .light-mode");
const darkMode = document.querySelector("header .dark-mode");


lightMode.addEventListener("click", () => {
    document.body.classList.toggle("change-darck-light");
    lightMode.style.display = "none";
    darkMode.style.display = "block";
})

darkMode.addEventListener("click", () => {
    document.body.classList.toggle("change-darck-light");
    lightMode.style.display = "block";
    darkMode.style.display = "none";
})







