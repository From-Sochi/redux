// import React from 'react';
import { GlobalStyle } from './assets/styles/app.styles';

// function App() {
//     return (
//         <>
//             <GlobalStyle />
//             <h2>This is my first Redux app!</h2>
//         </>
//     );
// }

// export default App;

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './app/root';

const router = createBrowserRouter([{ path: '/', element: <Root /> }]);

function App() {
    return (
        <>
            <GlobalStyle />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
