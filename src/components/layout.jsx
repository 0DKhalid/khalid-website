import React from 'react';
import {GlobalStyles} from 'twin.macro';



const Layout = ({children})=> {
    return <div>
        <GlobalStyles/>
        {children}
    </div>
}



export default Layout;