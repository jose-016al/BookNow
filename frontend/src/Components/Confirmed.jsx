import React from 'react';
import axios from 'axios';

const Confirmed = ({ bookingIdStatus }) => {

    const handleClick = async () => {
        try {
            await axios.put(`http://localhost:8000/api/booking/status/${bookingIdStatus}`);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <button className='border-0' onClick={handleClick}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQSSURBVFiFtZddTFNnGMd/7+nHKEUDBpMaWdKpmLkQQcrMQpTkIBAFkpldKMZkFyaLl4tX7sJwsS3ZuFn0xmRcGvcRl2BMOhNpsTCCmm0VxE8iUbK5AWJAoRXa0/bdxaHY09PS2sH/7vyf5z2//2nPec57BPnqKhux0gY0AtWAGyhdrr4EJpCMANdZ4lc+ZiGf04qcHX52IjmNpAMozjPua+AnoIsWHhcW4AYOQnwFfA5Y8wSnS0NwFiudqCzlH6CXSqAHqCoQnK5bJPiEg0zmDuBjD5JrwOY1gif1DIU2mhjNHkC/8qF1gL8JYeNDVKaShrJSClAE/LKOcIAKNLzcwGEOoPE1+uO13vIQ4ovkgf4X+NlJgvsUfrdnlV2xI6VEk1qqHcJGJSpT+i8gOb3WcIGgc1snocYQs+osx7ccTy2XEKVT79Mn3CT5D5mcUoTC+ffPc7Li5Io3H5unrL+MhEwkrTCLbLEuj9c1g9uEjQtVF+hwdRh8i7CgoJBgJYCTIlqt6LN9TeS0OLm0+xKt5a2m2pnxM8RkzGgqNFrJcudbhIW4jOcNL7OV4a3xUl9ab/AlklNjpzj31znzIsluBXgv1RMIuj/oZunAEg/qH1CzoSYn3GV3EfAETPC4jHPi/onMcF3bBL1EAHvSaStvw7vHu9LxQntBwx8NPAw/zHgGt8NNb20vlcWVBj+SiHDs7jEuP7+8WvaIku44LU7DcbmtHJ/Hh9vhNq3e5dzFYN2gCR6Kh2gfbs8FB/RJOJ9qXJm5wsjCiKFp6ztb8dX6cNldK55no4eBugEqiioMvXPaHM3BZvyz/pxw4JUCPE11IokILbdbGAuPGTp3FO/A5/GxybaJhrIG+jx9bLYbXxvT0WnUoMqtV7fygQM8EVyjG8Fn6RW3w81g3aDpCu+F7rG9eDsOxWHwJxYnaL7dzPjr8XzhAN8rwPVMlYnFCRqDjUxHpw1+VUmVCf4o/Ij9f+5/WzhAnyBACRpTgDNTR/WGavrr+im1lmYqE5wPcmj4EDPRmbeFh7HhUlAJAT9n67qzcIfDI4dZTCyaav5ZP2pQLQQOkh9RCSUfwy5Ay9Y7MDfAkdEjhldqz/Me2ofbWYjltftOVxQL30JyQ9LCYwRnV1vhnfHSMdpBXMa5OHmRo6NHiSQihcBB8h1NPIHUPWGAIjQCwEerrd1Xuo+hl0NIZKHwm8RRaSViDKCHcKHxO/BuYWfPqX+xsJcD/JM0jKNYZQqFduDZOsD/RnAwFW4OANDEKDFqgd/WDC25iY29NHM3vWQOANDKDDFagC+B8P9AR4FviKOmfgukKvfHaQAXUToRfEqWYZVBYQQ/IOhK3u3ZlDvAmyAlRGlDoAI16BuZ1M/zp8AwggBWri4PuJz6D0DmSviRznEjAAAAAElFTkSuQmCC" alt="confirmar" /></button>
    );
};

export default Confirmed;
