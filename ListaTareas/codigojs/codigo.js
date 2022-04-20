(function(){
    //Creando variables 
    var lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tareaInput"),
        btnNuevaTarea=document.getElementById("btn-agregar");

        //funciones 

        var agregarTarea = function(){
          alert("Agregar tarea")  
        };

        var comporbarInput=function(){
            alert("comprobar input")  
        
        };

        var eliminarTarea=function(){
            alert("eliminar tarea")  
        
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

