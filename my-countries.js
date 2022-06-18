
function inputCountry(){
    countryName = prompt("Введите страну");
    if (isNaN(countryName) == false){
        do{
            countryName = prompt("Ошибка. Введите страну еще раз");
        } while(isNaN(countryName) == false);
    }
    capitalName = prompt("Введите столицу");
    if (isNaN(capitalName) == false){
        do{
            capitalName = prompt("Ошибка. Введите столицу еще раз");
        } while(isNaN(capitalName) == false);
    }
    addСountry(countryName, capitalName);
    console.log(countries);
    alert("Данные введены");
}
function getCountry(){
    countryName = prompt("Введите страну, информацию о которой хотите получить");
    if (isNaN(countryName) == false){
        do{
            countryName = prompt("Ошибка. Введите страну еще раз");
        } while(isNaN(countryName) == false);
    }
    getcountryInfo(countryName);
    console.log(getcountryInfo(countryName));
    alert(getcountryInfo(countryName));
}
function showCountries(){
    listСountries();
    console.log(listСountries());
    alert(listСountries());
}
function removeCountry(){
    countryName = prompt("Введите страну, информацию о которой хотите удалить");
    if (isNaN(countryName) == false){
        do{
            countryName = prompt("Ошибка. Введите страну еще раз");
        } while(isNaN(countryName) == false);
    }
    if (countryName in countries){
        deleteСountry(countryName);
        console.log("Информация о стране " + countryName + " удалена");
        alert("Информация о стране " + countryName + " удалена");
    } else{
        console.log("Нет такой страны");
        alert("Нет такой страны");
    }
}