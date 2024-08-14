import Footer from "./Footer";
import Header from "./Header";
import ContactForm from "./ContactForm";
import style from "./Contact.module.css"

function Contact() {
  return (
    <div className={style.main}>
      <Header />
      <ContactForm />
      <Footer />
    </div>
  );
  
}
export default Contact
