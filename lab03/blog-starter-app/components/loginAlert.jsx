import React from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { useNavigate } from 'react-router-dom';
import { useRouter } from "next/router";

const Alert = () => {
  // const navigate = useNavigate();
  const router = useRouter();

  return (
    <div className="border mt-16">
      <div>
        <div>No autorizado 😁</div>
        <div>Debe registrarse para acceder a esta pagina</div>
        <button className="border mt-8" onClick={() => router.push("/login")}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Alert;
