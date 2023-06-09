# Frontend docs

# Tabla de contenidos
- [Creacion del proyecto](#creacion-del-proyecto)
- [Rutas](#rutas)
- [Instalacion de Boostrap y SASS](#instalacion-de-bootstrap-y-sass)
- [Consultas a la API](#consultas-a-la-api)
- [Brevo](#Brevo)

# Creacion del proyecto
Para la creacion de la parte del frontend creamos un proyecot de React
```bash
npx create-react-app frontend
```

# Rutas
Para poder navegar entre las distintas paginas del proyecto usaremos el paquete "react-router-dom"
```bash
npm install react-router-dom
```
Desde el index.js de nuestro proyecto configuraremos la redireccion 
```javascript
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```
Usaremos Link para los enlaces que nos proporciona react-router-dom
```javascript
import { Link } from 'react-router-dom';

<Link to={`/`}>Usuarios</Link>
```
Para redirigir al usuario a una ruta especifica en caso de que sea necesario usaremos Navigate
```javascript
import { Link, Navigate } from 'react-router-dom';

const Login = () => {

    const [isRegistered, setIsRegistered] = useState(false);

    const handleSubmit = async (event) => {
        // ----
        setIsRegistered(true);
    }

    if (isRegistered) {
        return <Navigate to="/" replace={true} />;
    }

}
```
Pagina de error 404 y sus estilos
```javascript
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error404 = () => {

    const error = useRouteError();
    console.error(error);

    return (
        <section className="page_404">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="sol-sm-12 col-sm-offset-1 text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center">404</h1>
                            </div>
                            <div className="contant_box_404">
                                <h3 className="h2">Look like you`re lost</h3>
                                <p>the page you are looking for not avaible!</p>
                                <Link className="link_404" to={`/`}>Go to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Error404;
```
los estilos de la pagina de error 404
```scss
/* ====================
    404 page
==================== */
.page_404 {
    padding: 40px 0px;
    background-color: #fff;
    font-family: 'Arvo', serif;
}
.page_404 img {
    width: 100%;
}
.four_zero_four_bg {
    background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
    height: 400px;
    background-position: center;
}
.four_zero_four_bg h1 {
    font-size: 80px;
}
.four_zero_four_bg h3 {
    font-size: 80px;
}
.link_404 {
    color: #fff;
    padding: 10px 20px;
    background-color: #39ac31;
    margin: 20px 0;
    display: inline-block;
}
.contant_box_404 {
    margin-top: -50px;
}
```

# Instalacion de Bootstrap y SASS
Para la instalacion de Bootstrap
```bash
npm install bootstrap react-bootstrap
```
lo importamos en el archivo index.js de nuestro proyecot
```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```
Para instalar Sass
```javascript
npm install node-sass
```
Una vez instlado creamos una carpeta llamada scss y en ella creamos el fichero sass, por ultimo licamos el fihcero al index.js. Sass nos generara un directorio con los css que sera el que lincamos
```javascript
import './css/comunes.css'
```

# Consultas a la API
Para las consultas por GET usaremos fetch
```javascript	
const [usuario, setUsuario] = useState([]);

    useEffect(() => {
        fetchDatos();
    }, []);

    const fetchDatos = async () => {
        try {
            const url = "https://jsonplaceholder.typicode.com/users";
            const respuesta = await fetch(url);
            const json = await respuesta.json();
            setUsuario(json);
        }
        catch (error) {
            console.log("error: " + error);
        }
    }
```
Para las consultas por POST usaremos axios
```bash
npm install axios
```
Para su uso como en el caso del login
```javascript
import axios from 'axios';

const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { email, password };
        try {
            const response = await axios.post('http://localhost:8000/api/login', JSON.stringify(data), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
            console.error(error.response.data);
        }
    }
```

# Brevo
[Brevo]('https://developers.brevo.com/') es una plataforma que nos proporciona una API, que nos permite enviar mensajes por correo electronico, una vez nos registremos podremos crear nuestros keys para usar la API.    
Documentacion: [Brevo-docs]('https://developers.brevo.com/docs/getting-started')
