import NumberFormat from "react-number-format";
import Typography from '@mui/material/Typography';
import * as React from 'react';

const PriceFormatPurchase = ({price}) => {
    let fixedPrice = price;
    let decimal = (fixedPrice + "").split(".")[1];
    let dosDec = decimal.slice (0,2);
    let entero = (price + "").split(".")[0];

    return (
        <>
        <Typography gutterBottom variant="h6" component="span">
                        <NumberFormat
                            value={entero}
                            displayType="text"
                            thousandSeparator="."
                            decimalSeparator=","
                            prefix="$"
                        />
                        
                    </Typography>
                    <Typography gutterBottom variant="h6" component="span">
                        <NumberFormat
                            value={dosDec}
                            displayType="text"
                            className="superscript"
                        />
                    </Typography>

                    </>
    );
}

export default PriceFormatPurchase;