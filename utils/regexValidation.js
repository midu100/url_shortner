const isValidEmail = (email)=>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email)
}


const isValidPass = (password)=>{
    const strongPasswordRegex = /^(?=.{8,64}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$/;

    return strongPasswordRegex.test(password)
}


module.exports = {isValidEmail,isValidPass}