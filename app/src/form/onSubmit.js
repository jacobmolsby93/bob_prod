import axios from "axios"

export const onSubmit = (values, actions) => {
  const data = new FormData();
   data.append('type', values.typ);
  data.append('first_name', values.fornamn);
  data.append('last_name', values.efternamn);
  data.append('email', values.epost);
  data.append('phone', values.telefon);
  data.append('county', values.stadsdel_kommun);
  data.append('subject', values.arende);
  data.append('message', values.medelande);
  data.append('message', values.medelande);
  // Adding multiple files to the form.
  if (values.files && values.files.length > 0) {
    for (let i = 0; i < values.files.length; i++) {
      data.append("files", [values.files[i].name, values.files[i]]);
    }
  }

  alert(`Tack ${values.fornamn}, för medelandet. Vi återkommer såfort vi kan!`);
  actions.resetForm();

  axios.post('https://bob-backend-paa5jl3pga-lz.a.run.app/api/email/', data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    .then(response => {
      console.log("email sent successfully");
      console.log(response)
      actions.setSubmitting(false);
    })
    .catch(error => {
      alert("Tyvär gick de inte att skicka ditt mail, var vänlig klicka på mail ikonen.");
      console.log(error)
      actions.setSubmitting(false);
    });
};
