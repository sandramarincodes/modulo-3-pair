function Preview({ email, region, legal, renderPayment }) {





  return (
    <>
    
       <div className="preview">
          <h2>Tus datos son:</h2>
          <ul>
            <li>Nombre: {name}</li>
            <li>Email: {email}</li>
            <li>Región: {region}</li>
            <li>Método de pago: {renderPayment()}</li>
            <li>
              Has aceptado nuestros términos legales:{" "}
              {legal === true ? "Sí" : "No"}
            </li>
          </ul>
        </div>
    
    </>
  )
}

export default Preview