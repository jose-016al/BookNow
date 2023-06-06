import React from 'react';
import axios from 'axios';

const Cancelled = ({ bookingIdHidden }) => {

    const handleClick = async () => {
        try {
            const response = await axios.put(`http://localhost:8000/api/booking/delete/${bookingIdHidden}`);
            console.log(response.data);
        }
        catch (error) {
            console.log("error: " + error);
        }
    }

    return (
        <button className='border-0' onClick={handleClick}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAADgAAAA4AGiX/7KAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAATVQTFRF/////0lJ/2BA9FVK9VJH4D422jw19E9KzjEr0C8q8VBJzC0p3z853j038VFJ8VNJ8lJK0jIv0TEszzAszi4q8FJJ8VJJxicjxigk8VJJ8lJJ2DozxCUi0TItvyEevR4c8VJJ8VJJ8VJJthcVthcWuhsZuxsZshISsxMSrQ4OrQ8PrRAQrg8PrhAQrxMTsBcXsR0dshsbx21tx25u0zQv035+1Ken1bCw1tbW17W117a217y8172919fX2L292ZCQ2djY2pOT2tbW2zw22z0325aW29bW3JiY36Oj4Gll4KSk4aen5W5q7e3t7u7u7+/v8VJJ8VNK8VVN8dXV8ltS9N7e9X139X53+KOe+K6p+K6q+bWx+e3t+r25+r66+sC9/Pf3/eHg/efm/vLx/vj4//r5////J6xKzgAAACl0Uk5TAAcIGBkhIi0vMUlQWVyEl5iqrL/BwcjLy9rj5unq6+3y8/X7+/z8/v57VdvTAAABZ0lEQVQ4y3WTZ0ODMBCGA61WUQEHKLVqqTPuURX33is4auuurfn/P0HIwADx/cJx70NyOXIARFI003Jc17FMTQFpZY0iilQ0sglb1UsoppKuin7GRinZmT8/l0cS5XPR91I/INgaqo3+kU3r0Nmr/8iNex7o5Hys/ufvn1efRNVGvcLOEp7WoHGliTH+DIlaEDSvadYI+sf6U8ehPnziY/x0TDumAI1t2yB5/P5Cn19LRySvAZPVU8UxncFZQpjA4hXXRP9qDlLCAg6SEJeBTwkHuChNnBOfEK4MuNudgZxwJVvcet52RAymiwx8z9vixEjqmDce0ToD+pKNOtmkwM4iBboSrT6AkBKH08QfV+I/ay9MboQLrNAF+oXfffHwtkqza/unyzSabBcvTHmeFQYXeNATv3JlmFBBTVzaBDHWkrr2MWK0QzI4AlFolY4eJ6a6Y6MnDC8hJgbaJPPNxn9ouLdTGP9fxnvZxOoj2NIAAAAASUVORK5CYII=" alt="cancelar" /></button>
    );

}

export default Cancelled;