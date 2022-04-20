(function(){
    //Creando variables 
    var lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tareaInput"),
        btnNuevaTarea=document.getElementById("btn-agregar");

        //funciones 

        var agregarTarea = function(){

            var tarea = tareaInput.value,
                nuevaTarea = document.createElement("li"),
                enlace = document.createElement("a"),
                contenido = document.createTextNode(tarea);
                if(tarea==""){
                    tareaInput.setAttribute("placeholder","Agrega una tarea validad");
                    tareaInput.className="error";
                    return false
                }


                //Agregamos el contenido al enlace
                enlace.appendChild(contenido);
                enlace.setAttribute("href","#");
                //agregando enlace a la nueva tarea
                nuevaTarea.appendChild(enlace);

                //Agregamos nueva tarea a la lista;
                lista.appendChild(nuevaTarea);




        };

        var comporbarInput=function(){
        
        };

        var eliminarTarea=function(){
        
        };
        
        //eventos 
        //Agregando tarea
        btnNuevaTarea.addEventListener("click",agregarTarea);
    
        //Comprobar input
        tareaInput.addEventListener("click", comporbarInput);
    
        //Borrando elementos de la lsita
        for(var i=0;i<=lista.children.length -1;i++){
            lista.children[i].addEventListener("click",eliminarTarea)

        }
    
    
    
    
    }());

