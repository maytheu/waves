import React, { Component } from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

class Paypal extends Component {
  render() {
    const onSuccess = payment => {
      //console.log(JSON.stringify(payment));

      this.props.onSuccess(payment);


      //"paid":true,
      // "cancelled":false,
      // "payerID":"3K7NHWWM5LRMN",
      // "paymentID":"PAYID-LRRKGSI4D792171C1182940P",
      // "paymentToken":"EC-9PM81234BK806844P",
      // "returnUrl":"https://www.paypal.com/checkoutnow/error?paymentId=PAYID-LRRKGSI4D792171C1182940P&token=EC-9PM81234BK806844P&PayerID=3K7NHWWM5LRMN",
      // "address":{
      //     "recipient_name":"test buyer",
      //     "line1":"1 Main St",
      //     "city":"San Jose"
      //     ,"state":"CA",
      //     "postal_code":"95131",
      // "country_code":"US"},
      // "email":"maytheu98-buyer@gmail.com"
    };
    const onCancel = data => {
      console.log(JSON.stringify(data));
      //{"paymentToken":"EC-3AG13208SR012410V","paymentID":"PAYID-LRRKBMY9Y573407NY577464W","intent":"sale","billingID":"EC-3AG13208SR012410V","cancelUrl":"https://www.paypal.com/checkoutnow/error?token=EC-3AG13208SR012410V"}
    };

    const onError = err => {
      console.log(JSON.stringify(err));
    };

    let env = "sandbox";
    let currency = "USD";
    let total = this.props.toPay;

    const client = {
      sandbox:
        "Aa81eBuJjZ-JBPfE3CdwvjyfE8x3LosRzeA0JVVhbpM4ogrmJNPIdw-TE0JhorJxTWAbZbZI4rXm1rQB",
      production: ""
    }; 
    return (
      <div>
        <PaypalExpressBtn
          env={env}
          client={client}
          currency={currency}
          total={total}
          onError={onError}
          onSuccess={onSuccess}
          onCancel={onCancel}
          style={{
            size: "large",
            color: "blue",
            shape: "rect",
            label: "checkout"
          }}
        />
      </div>
    );
  }
}

export default Paypal;
