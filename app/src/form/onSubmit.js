import React, { useState, useEffect } from "react";
import axios from "axios"

export const onSubmit = (values, actions) => {
    setTimeout(async () => {
      const {data} = await axios.post('https://bob-backend-test-paa5jl3pga-lz.a.run.app/api/email/', {
          type: values.typ,
          first_name: values.fornamn,
          last_name: values.efternamn,
          email: values.epost,
          phone: values.telefon,
          county: values.stadsdel_kommun,
          subject: values.arende,
          message: values.medelande
      }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
      actions.setSubmitting(false);
    }, 300);
  };