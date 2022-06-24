import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ListTripComponent = (props) => {

    // useEffect = (() => {
    //     recebeId()
    // } , []) 


     const navigate = useNavigate();


    return (
        <div key={props.viagens.id}>
            {props.viagens.name}
            <p>{props.viagens.name}</p>
            <p>{props.viagens.description}</p>
            <p>{props.viagens.planet}</p>
            <p>{props.viagens.durationInDays}</p>
            <p>{props.viagens.date}</p>
            <button onClick={() =>  navigate(`/ApplicationForm/${props.viagens.id}`)}>inscreve-se</button>
            <button onClick={() =>  navigate(`/TripDetails/${props.viagens.id}`)}>ver detalhes</button>
        </div>
    )
}


export default ListTripComponent;