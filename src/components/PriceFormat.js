import NumberFormat from "react-number-format";
import Typography from '@mui/material/Typography';
import * as React from 'react';

const PriceFormat = ({price}) => {
    let fixedPrice = price;
    let decimal = (fixedPrice + "").split(".")[1];
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
                            value={decimal}
                            displayType="text"
                            className="superscript"
                        />
                    </Typography>

                    </>
    );
}

export default PriceFormat;