import React, { useState } from "react";
import "./ClienteForm.css";
import Label from "./../../../01uikit/label/Label";
import { StyledSelect } from "../../../01uikit/01styled-components/StyledSelect";
import ClienteService from "../../../services/ClienteService";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const ClienteForm = () => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const cliente = data;
    ClienteService.createCliente(cliente);
    navigate("/listar-cliente");
    console.log(cliente);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form-cliente">
        <div className="input-cliente">
          <Label id="label" label={"Cuit"} />
          <input type="number" {...register('cuit')} />
        </div>
        <div className="input-cliente">
          <Label id="label" label={"Razón Social"} />
          <input type="text" {...register('razonSocial')} />
        </div>

        {/* select de areas */}
        <div className="input-cliente">
          <Label id="label" label={"Area"} />
          <StyledSelect {...register("area")}>
            <option value="sur">Sur</option>
            <option value="norte">Norte</option>
            <option value="centro">Centro</option>
          </StyledSelect>
        </div>

        <div className="input-cliente">
          <Label id="label" label={"Nombre Fantasia"} />
          <input type="text" {...register('nombreFantasia')} />
        </div>
        <div className="input-cliente">
          <Label id="label" label={"Contacto"} />
          <input type="text" {...register('nombreContacto')} />
        </div>
        <div className="input-cliente">
          <Label id="label" label={"Telefono"} />
          <input type="number" {...register('telefono')} />
        </div>
        <div className="input-cliente">
          <Label id="label" label={"Email"} />
          <input type="text" {...register('mail')} />
        </div>

        <input          
          className="form-control-s"
          type="submit"
          value="Guardar"
        />
      </form>
    </>
  );
};

export default ClienteForm;
