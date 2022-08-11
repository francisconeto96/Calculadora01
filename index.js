function valor (num) {
    
    $("#resultado").val($("#resultado").val() + num) 
    
}

function calcular () {
    
    $("#resultado").val(eval($("#resultado").val())

    ) 
    
}

function limpar() {

    $("#resultado").val(' ');
    
} 
