import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const Balance = (props) => {
    const [assetBalance, setAssetBalance] = useState(null);
    const [cashBalance, setCashBalance] = useState(null);

    if (sessionStorage.getItem('accountKey')) {
        const key = sessionStorage.getItem('accountKey');

        const checkBalance = async (key) => {
            const payload = {
                accountKey : key
            }
            const response = await axios.post("https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance", payload, { headers : {'x-api-key' : "ykOwd1IKUR3bX1I7O3yWx6QomMSqTOrG2cKUdzhg"}})
            setCashBalance(response.data.cashBalance);
            setAssetBalance(response.data.assetBalance);
        }

        checkBalance(key);
    }

    

    return(
        <div>
            Balance
            <br/>
            Asset Balance : {assetBalance ? assetBalance : null }
            <br/>
            Cash Balance : {cashBalance ? cashBalance : null}
        </div>
    );
}

export default withRouter(Balance);