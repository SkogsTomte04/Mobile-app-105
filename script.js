function getJSONData(){
    fetch('./Assets/data.json')
        .then((respond) => {
            if (!respond.ok){
                throw new Error('HTTP error! Status: ${respond.status}');
            }
            return respond.json();
        })
        .then((data) => console.log(data))
        .catch((error) => console.error("Unable to fetch data", error));
}

const jsonData = JSON.parse(getJSONData());
document.getElementById("username").innerHTML = jsonData.employees[1].firstName;