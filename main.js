let currentStep = 1
let nombre;
let telefono;
let horario;

function showProcess(){
    let proceso = document.getElementById("process-container")
    proceso.style.display = "block";
}
function showStep(step) {
    let paso = document.getElementById ("step"+step);
    paso.style.display= "block";
}
function hideStep(step){
    document.getElementById("step"+step).style.display = "none";
}
function nextStep(step){
    hideStep(currentStep);
    currentStep = step + 1;
    showStep(currentStep);

}
function prevStep(step){
    hideStep(currentStep);
    currentStep = step - 1;
    showStep(currentStep);
}
function send(event) {
event.preventDefault();

    nombre = document.getElementById("nombre").value;
    telefono = document.getElementById("telefono").value;
    horario = document.getElementById("horario").value;
    alert("formulario enviado");
    console.log(nombre, telefono, horario);

    let datos = document.getElementById("user-data");
    datos.innerHTML = `
    <p>Nombre: ${nombre}</p>
    <p>Telefono: ${telefono}</p>
    <p>Horario: ${horario}</p>
    `
}
showStep(currentStep);

function mostrarSeleccion(){
    let select = document.getElementById("selector");
    console.log(select.value)
}