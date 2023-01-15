const NAME_REGEXP = /^[A-Z][a-z]+$/
const PHONE_NUMBER_REGEXP = /^[^+]?(\d{2})?(097|098|050|063|073|095|055|066|067|068|093|096|099)(\s|-)?\d{7}$/i
const EMAIL_REGEXP = /^[A-Z]+[A-Z \d.]+@[A-Z\d-]+.[A-Z]{2,}$/i
// const PASSWORD_REGEXP = /^(?=.*[!@#$&*])(?=[A-Z]*\d).{8,}$/i
const PASSWORD_REGEXP = /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[\da-zA-Z!@#$%^&*]{8,}/g

const form = document.getElementById("user_login_form");
const block = document.getElementById("block_form")
const inputUserFirstName = document.getElementById("firstName");
const inputUserLastName = document.getElementById("lastName");
const inputUserPhone = document.getElementById("phoneNumber");
const inputUserEmail = document.getElementById("email");
const inputUserPassword = document.getElementById("password");
const inputUserConfirmPassword = document.getElementById("confirmPassword")
const blockFirstName = document.getElementById("description_first_name");
const blockLastName = document.getElementById("description_last_name");
const blockPhoneNumber = document.getElementById("description_phone_number")
const blockEmail = document.getElementById("description_email")
const blockPassword = document.getElementById("description_password")
const blockConfirmPassword = document.getElementById("description_confirm_password")

document.forms.publish.onsubmit = function (e) {
    e.preventDefault();
    const firstName = this.firstName.value;
    const lastName = this.lastName.value;
    let phoneNumber = this.phoneNumber.value;
    const email = this.email.value;
    const password = this.password.value;
    const confirmPassword = this.confirmPassword.value;

    if (phoneNumber.length === 10) {
        phoneNumber = "38" + phoneNumber
    }


    const isUserFirstName = (value, element) => {
        if (NAME_REGEXP.test(value)) {

            element.style.border = "2px solid green"
            blockFirstName.innerText = ""

            return true
        } else {
            element.style.border = "2px solid red"

            if (value.length === 0) {
                blockFirstName.innerText = "Ваше ім'я має містити дві та більше букв та починатися з великої літери*"
            } else if (value.length < 2 && value.length > 0) {
                blockFirstName.innerText = "Ваше ім'я має містити дві та більше букв*"
            } else if (value.length >= 2 && value[0] !== value[0].toUpperCase()) {
                blockFirstName.innerText = "Ваше ім'я має починатися з великої літери*"
            }


            blockFirstName.style.color = "red"
        }
    }

    const isUserLastName = (value, element) => {
        if (NAME_REGEXP.test(value)) {

            element.style.border = "2px solid green"
            blockLastName.innerText = ""
            return true
        } else {
            element.style.border = "2px solid red"
            if (value.length === 0) {
                blockLastName.innerText = "Ваше прізвище має містити дві та більше букв та починатися з великої літери*"
            } else if (value.length < 2 && value.length > 0) {
                blockLastName.innerText = "Ваше прізвище має містити дві та більше букв*"
            } else if (value.length >= 2 && value[0] !== value[0].toUpperCase()) {
                blockLastName.innerText = "Ваше прізвище має починатися з великої літери*"
            }
            blockLastName.style.color = "red"
        }
    }

    const isPhoneNumber = (phone, element) => {
        const arrayRegionNumber = ["097", "098", "050", "063", "073", "095", "055", "066", "067", "068", "093", "096", "099"]

        if (PHONE_NUMBER_REGEXP.test(phone)) {
            if (phone.length === 10) {
                phone = "38" + phone

                element.style.border = "2px solid green"
                blockFirstName.innerText = ""
                return true
            } else if (phone.length === 12) {

                element.style.border = "2px solid green"
                blockFirstName.innerText = ""


                return true
            }
        } else {
            element.style.border = "2px solid red"

            if (phone.length !== 10 && phone.length !== 12) {
                blockPhoneNumber.innerText = `Ваш номер має містити 10 символів або 12 символів`
            } else if (typeof phone !== "number") {
                blockPhoneNumber.innerText = `Ваш номер має містити тільки числа`
            }
            if (phone.length === 10) {
                const valueRegionNumberInput = phone[0] + phone[1] + phone[2]
                arrayRegionNumber.forEach(el => {
                    if (valueRegionNumberInput !== el) {
                        blockPhoneNumber.innerText = `Ваш номер має містити тільки номера операторів, обслуговуючихся в Україні`
                    }
                })
            }
            if (phone.length === 12) {
                const valueRegionNumberInput = phone[2] + phone[3] + phone[4]
                arrayRegionNumber.forEach(el => {
                    if (valueRegionNumberInput !== el) {
                        blockPhoneNumber.innerText = `Ваш номер має містити тільки номера операторів, обслуговуючихся в Україні`
                    }
                })
            }


            blockPhoneNumber.style.color = "red"
        }
    }

    const isEmail = (email, element) => {
        const firstElementInEmail = (email.match(/^\d/) || email.match(/^[!@#$%^&*.]/))


        const splitEmail = email.split('@')[1]

        const dotElementInEmail = [...splitEmail].filter(x => x === ".").length

        if (EMAIL_REGEXP.test(email)) {

            element.style.border = "2px solid green"
            blockEmail.innerText = ""
            return true
        } else {
            if (typeof Number(email[0]) === email[0]) {
                blockEmail.innerText = `Пошта не має починатися з числа*`
            }else if (dotElementInEmail >1){
                blockEmail.innerText = `Пошта має містити лише одну крапку після @*`
            }else{
                blockEmail.innerText = "друга частина повинна містити літери"
            }

            element.style.border = "2px solid red"
            blockEmail.style.color = "red"
        }
    }

    const isPassword = (pass, confirmPass, element) => {
        const specialCharactersArr = ["!", "@", "#", "$", "%", "^", "&", "*"]

        if (PASSWORD_REGEXP.test(pass)) {

            element.style.border = "2px solid green"
            blockPassword.innerText = ""

            if (pass === confirmPass) {

                inputUserConfirmPassword.style.border = "2px solid green"
                blockConfirmPassword.innerText = ""
                return true
            } else {
                inputUserConfirmPassword.style.border = "2px solid red"
                blockConfirmPassword.innerText = `Перевірка пароль має співпадати з паролем *`
                blockConfirmPassword.style.color = "red"
            }
        } else {
            element.style.border = "2px solid red"

            const passwordLower = pass.toLowerCase()
            const passwordHeight = pass.toUpperCase()

            if (pass.length < 8) {
                blockPassword.innerText = `Пароль має містити 8 та більше символів*`
            } else if (passwordLower === pass) {
                blockPassword.innerText = `Пароль має містити одну або більше великих літер*`
            } else if (passwordHeight === pass) {
                blockPassword.innerText = `Пароль має містити одну або більше малих літер*`
            } else {
                const passwordValueArray = pass.split('')
                for (let i = 0; i < passwordValueArray.length; i++) {
                    for (let j = 0; j < specialCharactersArr.length; j++) {
                        if (passwordValueArray[i] === specialCharactersArr[j]) {
                            blockPassword.innerText = `Пароль має містити один або більше спецсимволів*`
                        }
                    }
                }
            }

            blockPassword.style.color = "red"
        }

    }

    const allForm = () => {
        if (NAME_REGEXP.test(firstName) && NAME_REGEXP.test(lastName) && PHONE_NUMBER_REGEXP.test(phoneNumber) &&
            EMAIL_REGEXP.test(email) && PASSWORD_REGEXP.test(password) && PASSWORD_REGEXP.test(confirmPassword)) {

            form.innerText = "";
            const blockCompleteForm = document.createElement("div");
            const textCompleteForm = document.createElement("p");
            block.appendChild(form);

            textCompleteForm.innerText = "User data is correctly!"
            textCompleteForm.className = "text-complete-form";
            blockCompleteForm.className = "block-complete-form"

            blockCompleteForm.appendChild(textCompleteForm);
            block.appendChild(blockCompleteForm);

            console.log("First Name " + firstName)
            console.log("Last Name " + lastName)
            console.log("Phone " + phoneNumber)
            console.log("Email " + email)
            console.log("Password " + password)

        } else {
            isEmail(email, inputUserEmail)
            isPhoneNumber(phoneNumber, inputUserPhone)
            isUserLastName(lastName, inputUserLastName)
            isUserFirstName(firstName, inputUserFirstName)
            isPassword(password, confirmPassword, inputUserPassword)
        }
    }

    allForm()
};



