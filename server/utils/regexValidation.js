const isValidEmail = (email)=>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email)
}


const isValidPass = (password)=>{
    const strongPasswordRegex = /^(?=.{8,64}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$/;

    return strongPasswordRegex.test(password)
}


const isValidUrl = (urlLong)=>{
   const urlRegex = /^(https?):\/\/((([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})|localhost|(\d{1,3}\.){3}\d{1,3}|\[?[A-F0-9:]+\]?)(:\d{1,5})?(\/[^\s]*)?$/i;


   return urlRegex.test(urlLong)
}


module.exports = {isValidEmail,isValidPass,isValidUrl}