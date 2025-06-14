

const Form = () => {
    
    return(
        <>
              <div className="form">
          {/* name */}
          <div className="input-group-text">
            <label className="label-text" htmlFor="name">
              Escribe un nombre:
            </label>
            <input
              className="input-text"
              type="text"
              name="name"
              id="name"
              placeholder="María García"
              value={name}
              onChange={handleName}
            />
          </div>

          {/* email */}
          <div className="input-group-text">
            <label className="label-text" htmlFor="email">
              Escribe un email:
            </label>
            <input
              className="input-text"
              type="email"
              name="email"
              id="email"
              placeholder="mariagarcia@gmail.com"
              value={email}
              onChange={handleEmail}
            />
          </div>

          {/* region */}
          <div className="input-group-select">
            <label className="label-text" htmlFor="region">
              Indica tu región:
            </label>
            <select
              className="input-select"
              name="region"
              id="region"
              value={region}
              onChange={handleRegion}
            >
              <option>España peninsular</option>
              <option>Islas Canarias</option>
              <option>Islas Baleares</option>
              <option>Ceuta</option>
              <option>Melilla</option>
            </select>
          </div>

          {/* payment type */}
          <label className="label-text">Indica tu método de pago:</label>

          <div className="input-group-radio">
            <label className="label-radio" htmlFor="creditCard">
              Tarjeta de crédito
            </label>
            {/* Este radio solo debe aparecer activo cuando paymentType sea creditCard */}
            <input
              type="radio"
              name="paymentType"
              id="creditCard"
              value="creditCard"
              checked={paymentType === "creditCard"}
              onChange={handlePaymentType}
            />
          </div>

          <div className="input-group-radio">
            <label className="label-radio" htmlFor="cash">
              Efectivo
            </label>
            {/* Este radio solo debe aparecer activo cuando paymentType sea cash */}
            <input
              type="radio"
              name="paymentType"
              id="cash"
              value="cash"
              checked={paymentType === "cash"}
              onChange={handlePaymentType}
            />
          </div>

          <div className="input-group-radio">
            <label className="label-radio" htmlFor="cashOnDelivery">
              Contra reembolso
            </label>
            {/* Este radio solo debe aparecer activo cuando paymentType sea cashOnDelivery */}
            <input
              type="radio"
              name="paymentType"
              id="cashOnDelivery"
              value="cashOnDelivery"
              checked={paymentType === "cashOnDelivery"}
              onChange={handlePaymentType}
            />
          </div>

          {/* legal terms */}
          <div className="input-group-checkbox">
            <label className="label-check" htmlFor="legalTerms">
              Debes aceptar nuestros términos legales para completar la compra:
            </label>
            {/* Este radio solo debe aparecer activo cuando legalTerms sea true */}
            <input
              type="checkbox"
              name="legalTerms"
              id="legalTerms"
              checked={legalTerms}
              onChange={handleLegalTerms}
            />
          </div>
        </div>
        </>
    );
};

export default Form;