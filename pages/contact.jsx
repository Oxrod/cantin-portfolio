const ContactPage = () => {
  return (
    <div className="flex justify-center h-full mb-auto">
      <form
        id="fs-frm"
        name="contact-form"
        className="m-auto md:w-3/6"
        accept-charset="utf-8"
        action="https://formspree.io/f/moqzweyk"
        method="post"
      >
        <fieldset id="fs-frm-inputs">
          <label for="full-name">Nom complet</label>
          <input
            type="text"
            name="name"
            id="full-name"
            placeholder="Prénom et nom"
            required=""
          />
          <label for="email-address">Adresse mail</label>
          <input
            type="email"
            name="_replyto"
            id="email-address"
            placeholder="john.doe@mon-domaine.com"
            required=""
          />
          <label for="message">Message</label>
          <textarea
            rows="5"
            name="message"
            id="message"
            placeholder="Décrivez en quelques mots l'objet de votre demande."
            required=""
          ></textarea>
          <input
            type="hidden"
            name="_subject"
            id="email-subject"
            value="Contact Form Submission"
          />
        </fieldset>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default ContactPage;
