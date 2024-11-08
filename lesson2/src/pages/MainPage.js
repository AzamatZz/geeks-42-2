import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Dz1 from "../components/Dz1";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <div className='btn'>MainPage</div>
            <Button name={'Open'} color={'primary'}/>
            <Button name={'Close'} color={'error'}/>
            <Button name={'Save'} color={'secondary'}/>
            <Dz1 name={'Azamat '} age={32}/>
            <Footer/>
        </div>
    );
};

export default MainPage;