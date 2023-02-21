import React, { useState, useEffect } from "react";
import axios from "axios"

export const onSubmit = (values, actions) => {
    setTimeout(async () => {
      const {data} = await axios.post('http://127.0.0.1:8000/api/email/', {
          typ: values.typ,
          fornamn: values.fornamn,
          efternamn: values.efternamn,
          epost: values.epost,
          telefon: values.telefon,
          stadsdel_kommun: values.stadsdel_kommun,
          arende: values.arende,
          medelande: values.medelande
      }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
      actions.setSubmitting(false);
    }, 300);
  };
  