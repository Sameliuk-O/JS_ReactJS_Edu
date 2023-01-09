export const Error = ({label}) => {
    let description
    if (label === "First Name"){
        description = "The name must be written only in Latin letters.\n" +
             "The first letter must be capitalized.\n" +
             "The length must be two or more letters."
    }else if(label === "Last Name"){
        description = "The name must be written only in Latin letters.\n" +
            "The first letter must be capitalized.\n" +
            "The length must be two or more letters."
    }else if(label === "Title"){
        description = "The title must be written only in Latin letters.\n" +
            "The first letter must be capitalized.\n" +
            "The length must be two or more letters."
    }else if(label === "Email"){
        description = "The email must be written only in Latin letters.\n" +
            "There must be no special characters at the beginning.\n"
    }else if(label === "Phone"){
        description = "Phone number must include only digits.\n" +
            "Length must be valid for phone numbers\n"
    }else if(label === "Password" ){
        description = `Password must be one or more digits.\n` +
            "The password must contain one or more lowercase and uppercase letters.\n" +
            "Password must be 8+ characters long.\n"+
            "Must contain one or more special characters (!, %, ?, #, $, * or others)"
    }else if(label === "Confirm Password"){
        description = "Confirm password must match the password"
    }

    return (
        <div>
            <p style={{color : "red"}}>{description}</p>
        </div>
    )
}