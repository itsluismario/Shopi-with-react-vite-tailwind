<p align="center">
  <a href="https://platzi.com/cursos/react-vite-tailwindcss/" target="_blank">
    <img alt="Curso de React.js con Vite.js y TailwindCSS.js" src="https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/badge-curso-react-vite-8cd23e27-eebb-4dcc-aeb7-cc83924080eb.png" width="60" />
  </a>
</p>
<h1 align="center">
  Proyecto con React.js, Vite.js y TailwindCSS
</h1>
<p align="center">
  <a href="https://react-tailwind-itsluismario.vercel.app/" target="_blank">
    https://react-tailwind-itsluismario.vercel.app/
  </a>
</p>

[Curso de React.js con Vite.js y TailwindCSS](https://platzi.com/cursos/react-vite-tailwindcss/) hecho por [@itsluismario](https://twitter.com/itsluismario) 

* [Guía rápida](#-gu%C3%ADa-rápida)
* [Logros](#-logros)

### 🤖 Guía Rápida

1.  **Empieza a desarrollar.**

    Crea tu proyect    

    ```sh
    npm create vite@latest my-project -- --template react
    cd my-project   
    ```

    Instala Tailwind CSS

    ```sh
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

    Configura tus template paths en tailwind.config.js

    ```
    /** @type {import('tailwindcss').Config} */
        export default {
        content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
        }
    ```

    Añade los Tailwind directives en index.css

    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

    Correlo

    ```
    npm run dev
    ```

    El sitio estará disponible en https://react-tailwind-itsluismario.vercel.app/.


### 🚀 Logros

1. Creación del proyecto
2. Agrego una ruta básica
3. Agrego una ruta dinámica
4. Enlazo páginas y creo una SPA
5. Páginas usando nuestra propia API
6. Crea components App and Document personalizados
7. Crea páginas y componentes UI para el sitio.
9. Crea Store simple usando Context
10. Implementa navegación client-side con React Router.

Happy hacking!
