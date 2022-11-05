import { PayPalScriptProvider, PayPalButtons,usePayPalScriptReducer } from "@paypal/react-paypal-js";
import React, {useEffect,useState} from 'react'
import SuccessfulPage from "./SuccessfulPage";

const Paypal = (props) => {
    const [success, setSuccess] = useState(false);

        // This values are the props in the UI
const amount = props.totalPrice;
console.log(amount);
const currency = "USD";
const style = {"layout":"vertical","color":"blue","label":"checkout"};

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
 
    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);


    return (<>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: props.totalPrice,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order
                        alert('SUCCESSFUL, Thank you for your purchase');
                        setSuccess(true);
                        
                    });
                }}
            />
        </>
    );
}





  return (
    <div style={{ maxWidth: "750px", minHeight: "200px", margin: " 10px auto" }}>
           { success ? ( <SuccessfulPage /> ):( <PayPalScriptProvider
                options={{
                    "client-id": "test",
                    components: "buttons",
                    currency: "USD"
                }}
            >
				<ButtonWrapper
                    currency={currency}
                    showSpinner={true}
                />
			</PayPalScriptProvider>
           )

           } 
		</div>
  )
}

export default Paypal

