import React, { FC, Fragment } from 'react';
import { Header } from './Header';
import { Section } from './Section';

const App: FC<any> = () => {
    return <Fragment> 
        <Header />
        <Section title="Simple alert" />
        </Fragment>
    ;
}

export default App;