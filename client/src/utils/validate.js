export const checkvalidData=(name,email,password)=>{

const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
const isnameValid= /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name)

if(!isnameValid)return  "User Name is not Valid"
if(!isEmailValid)return "Email address is not valid ";
if(!isPasswordValid)return "Password is not valid ";

return null;
}