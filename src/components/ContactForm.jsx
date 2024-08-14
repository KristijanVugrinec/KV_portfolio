import style from "./Contactform.module.css"
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

function ContactForm() {
    const form = useRef();
  const [formState, setFormState] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    text: "",
  });

  const [fieldValidity,setFieldValidity] = useState({
    name: true,
    surname: true,
    email: true,
    phone: true,
    text: true,
  })

  const validateField = (name, value) => {
    let isValid = true;

    switch (name) {
        case 'email':
            isValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
            break;
        case 'name':
        case 'surname':
            isValid = /^[a-zA-Z]+$/.test(value);
            break;
        case 'phone':
            isValid = /^\+\d[\d\s]*$/.test(value);
            break;
        case 'text':
            isValid = /^[a-zA-Z,.!?'\s]+$/.test(value);
            break;
        default:
            break;
    }
    return isValid;
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));

    const isValid = validateField(name,value);
    setFieldValidity({
        ...fieldValidity,
        [name]: isValid
    })
  }

  function handleSubmit(event) {
    event.preventDefault();

    let isValidForm = true;
    const newFieldValidity = {...fieldValidity};

    Object.keys(formState).forEach((key) => {
        const isValid = validateField(key, formState[key]);
        newFieldValidity[key] = isValid;
        if(!isValid) isValidForm = false;
    });

    setFieldValidity(newFieldValidity);

    if(isValidForm){
       const serviceId = 'portfolio_66';
       const templateId = 'portfolio_66';
       const publicKey = 'j-kyYOL7l6v2UxY9g';

       const templateParams = {
           from_name: formState.name,
           from_surname : formState.surname,
           from_email: formState.email,
           to_name: 'Kristijan V',
           from_phone: formState.phone,
           message: formState.text,
       }
       emailjs.send(serviceId,templateId,templateParams,publicKey)
       .then((response) => {
           console.log('Email sent successfully!',response);
           alert('Uspjesno poslano!');
           window.location.reload()
       })
       .catch((error) => {
           console.log('Error sending email:',error)
       })
    } 

  };

return (
    <div className={style.main}>
        <h2>CONTACT ME</h2>
        <p>If you need a website, have a question, or just want to say hi, feel free to contact me using the form below. I'm looking forward to hearing from you!</p>
        <p>Fields marked with an asterisk (*) are required.</p>
        <form
            className={style.form}
            ref={form}
          onSubmit={handleSubmit}
        >
          <fieldset className={style.field}>
            <p className={style.fullName}>Full Name</p>
            <div className={style.fullname}>
              <label className={`${style.name} ${style.reddot}`} htmlFor="ime">
                Name
              </label>
              <input
                className={style.nametext}
                type="text"
                id="ime"
                name="name"
                placeholder="Nicolaus"
                value={formState.name}
                onChange={handleInputChange}
                style={{borderColor : fieldValidity.name ? '#000' : '#FF0000'}}
              ></input>
              <label className={`${style.name} ${style.reddot}`} htmlFor="prezime">
                Surname
              </label>
              <input
                className={style.surnametext}
                type="text"
                id="prezime"
                name="surname"
                placeholder="Tanto"
                value={formState.surname}
                onChange={handleInputChange}
                style={{borderColor : fieldValidity.surname ? '#000' : '#FF0000'}}
              ></input>
            </div>
            <label htmlFor="email" className={style.reddot}>Email Address</label>
            <input
              className={style.user}
              type="text"
              id="email"
              name="email"
              placeholder="youremail@gmail.com"
              value={formState.email}
              onChange={handleInputChange}
              
              style={{borderColor : fieldValidity.email ? '#000' : '#FF0000'}}
            ></input>
            <label htmlFor="phone" className={style.reddot}>Phone Number</label>
            <input
              className={style.user}
              type="text"
              id="phone"
              name="phone"
              placeholder="+385 95 395 6023"
              value={formState.phone}
              onChange={handleInputChange}
              style={{borderColor : fieldValidity.phone ? '#000' : '#FF0000'}}
            ></input>
            <label htmlFor="message" className={style.reddot}>Your Message</label>
            <textarea
              className={style.textarea}
              type="textarea"
              id="message"
              name="text"
              placeholder="Enter your text here..."
              value={formState.text}
              onChange={handleInputChange}
              style={{borderColor : fieldValidity.text ? '#000' : '#FF0000'}}
            ></textarea>
            <div className={style.buttondiv}>
              <button type="submit" value="Send" className={style.button}>
                SEND
              </button>
            </div>
          </fieldset>
        </form>
      </div>
);

}

export default ContactForm;