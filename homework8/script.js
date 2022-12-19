const regexpName = /^[A-Z][a-z]+$/
const regexpPhoneNumber = /^[^+]?(\d{2})?(097|098|050|063|073|095|055|066|067|068|093|096|099)(\s|-)?\d{7}$/i
const regexpEmail = /^[A-Z]+[A-Z \d.]+@[A-Z\d-]+.[A-Z]{2,}$/i
const regexpPassword = /^(?=.*[!@#$&*])(?=[A-Z]*\d).{8,}$/i

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

    if (phoneNumber.length === 10){
        phoneNumber = "38" + phoneNumber
    }


    const isUserFirstName = (value, element) => {
        if (regexpName.test(value)) {

            element.style.border = "2px solid green"
            blockFirstName.innerText =  ""

            return true
        }else{
            element.style.border = "2px solid red"

            blockFirstName.innerText =  "write valid Name*"
            blockFirstName.style.color = "red"
        }
    }

    const isUserLastName = (value, element) => {
        if (regexpName.test(value)) {

            element.style.border = "2px solid green"
            blockFirstName.innerText =  ""
            return true
        }else{

            element.style.border = "2px solid red"

            blockLastName.innerText =  `write valid Name*`
            blockLastName.style.color = "red"
        }
    }

    const isPhoneNumber = (phone, element) => {
        if (regexpPhoneNumber.test(phone)) {
            if (phone.length === 10){
                phone = "38" + phone

                element.style.border = "2px solid green"
                blockFirstName.innerText =  ""
                return true
            }else if (phone.length === 12){

                element.style.border = "2px solid green"
                blockFirstName.innerText =  ""
                return true
            }
        }else{
            element.style.border = "2px solid red"

            blockPhoneNumber.innerText =  `write valid Phone number*`
            blockPhoneNumber.style.color = "red"
        }
    }

    const isEmail = (email, element) => {
        if (regexpEmail.test(email)) {

            element.style.border = "2px solid green"
            blockFirstName.innerText =  ""
            return true
        }else{
            element.style.border = "2px solid red"
            blockEmail.innerText =  `write valid Email*`
            blockEmail.style.color = "red"
        }
    }

    const isPassword = (pass, confirmPass, element) => {
        if (regexpPassword.test(pass)) {

            element.style.border = "2px solid green"
            blockFirstName.innerText =  ""

            if (pass === confirmPass) {

                inputUserConfirmPassword.style.border = "2px solid green"
                blockConfirmPassword.innerText =  ""
                return true
            }
            else{
                inputUserConfirmPassword.style.border = "2px solid red"
                blockConfirmPassword.innerText =  `write valid Confirm Password*`
                blockConfirmPassword.style.color = "red"
            }
        }else{
            element.style.border = "2px solid red"
            blockPassword.innerText =  `write valid Password*`
            blockPassword.style.color = "red"
        }

    }

    const allForm = () => {
        if (regexpName.test(firstName) && regexpName.test(lastName) && regexpPhoneNumber.test(phoneNumber) &&
            regexpEmail.test(email) && regexpPassword.test(password) && regexpPassword.test(confirmPassword)) {

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

        }else{
            isEmail(email, inputUserEmail)
            isPhoneNumber(phoneNumber, inputUserPhone)
            isUserLastName(lastName, inputUserLastName)
            isUserFirstName(firstName, inputUserFirstName)
            isPassword(password, confirmPassword, inputUserPassword)
        }
    }

    allForm()
};



