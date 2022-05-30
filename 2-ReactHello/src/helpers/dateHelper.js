export function getAgeFrom(birthdate){
    if(!birthdate) return "?"

    const [birthYear, birthMonth, birthDay] = birthdate.split('-')

    const today = new Date(),
    todayYear = today.getFullYear(),
    todayMonth = today.getMonth() + 1,
    todayDate = today.getDate();

    //console.log(todayYear,todayMonth,todayDate)

    const age = todayYear - parseInt(birthYear,10)

    if(parseInt(birthMonth,10) > todayMonth) return age -1 

    if(parseInt(birthMonth,10) === todayMonth && parseInt(birthDay,10) > todayDate) return age -1

    return age
}