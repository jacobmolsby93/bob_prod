import React, { useState, useEffect } from "react";
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
  // Adding multiple files to the form.
  if (values.images && values.images.length > 0) {
    for (let i = 0; i < values.images.length; i++) {
      data.append('files', values.images[i], values.images[i].name);
    }
  }
  
  alert(`Tack ${values.fornamn}, för medelandet. Vi återkommer såfort vi kan!`);
  actions.resetForm();

  axios.post('https://bob-backend-test-paa5jl3pga-lz.a.run.app/api/email/', data)
    .then(response => {
      console.log(response);
      actions.setSubmitting(false);
    })
    .catch(error => {
      console.error(error);
      actions.setSubmitting(false);
    });
};
