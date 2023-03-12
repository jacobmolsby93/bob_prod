import axios from "axios"

export const onSubmit = (values, actions) => {
  const data = new FormData();
   data.append('type', values.typ ? values.typ : "Ej vald");
  data.append('first_name', values.fornamn);
  data.append('last_name', values.efternamn);
  data.append('email', values.epost);
  data.append('phone', values.telefon ? values.telefon : "0000");
  data.append('county', values.stadsdel_kommun ? values.stadsdel_kommun : "Stockholm");
  data.append('subject', values.arende ? values.arende : "Renovering");
  data.append('message', values.medelande);
// Adding multiple files to the form.
if (values.files && values.files.length > 0) {
  const appendFiles = values.files;
  appendFiles.forEach(file => {
    data.append('files', file, file.name, file.type);
  })
}


  alert(`Tack ${values.fornamn}, för medelandet. Vi återkommer såfort vi kan!`);
  actions.resetForm();

  axios.post('https://bob-backend-test-paa5jl3pga-lz.a.run.app/api/email/', data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    .then(response => {
      console.log(response) 
      actions.setSubmitting(false);
    })
    .catch(error => {
      actions.setSubmitting(false);
      console.log(error)
    });
};
