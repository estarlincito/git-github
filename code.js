const dataid = document.getElementById('dataid');

fetch("commands.json")
.then(response => response.json())
.then(data => {
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        // console.log(element.value)
        dataid.innerHTML += `<p><b>${element.command}</b> <em>${element.value}</em></p>`
    }
});
