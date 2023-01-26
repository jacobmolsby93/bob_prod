import React from "react";
import { Box } from "@mui/material";
import {useParams} from "react-router-dom"
import galleryData from "../../data/galleryData"


export default function Detail() {
const {titleUrl} = useParams()
const thisBathroom = galleryData.find(item => item.item_url === titleUrl)

  return <div>{thisBathroom.unique_key}</div>;
}
