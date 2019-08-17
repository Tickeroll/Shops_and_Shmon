import React from "react";

import dialog  from '../../images/ESImages/dialog.jpg'
import ds4  from '../../images/ESImages/ds4.jpg'
import xboxone  from '../../images/ESImages/xboxone.jpg'
import logitech720  from '../../images/ESImages/logitech720.jpg'
import xeox  from '../../images/ESImages/xeox.jpg'
import logitech  from '../../images/ESImages/logitech.jpg'
import ipega  from '../../images/ESImages/ipega.jpg'
import msi  from '../../images/ESImages/msi.jpg'
import steelseries  from '../../images/ESImages/steelseries.jpg'
import xbox360  from '../../images/ESImages/xbox360.jpg'

const imgStyle = {height: '200px', width: '300px'};

export const gamepads = [
    {id: 1, name: "Ipega", img: <img src={ipega} alt="описание" style={imgStyle}/>, price: "2000", discription: "крутой геймпад", currency: "RUB", count: 0},
    {id: 2, name: "Logitech 720", img:  <img src={logitech720} alt="описание" style={imgStyle}/>, price: "1500", discription: "крутой геймпад", currency: "RUB", count: 0},
    {id: 3, name: "Logitech", img: <img src={logitech} alt="описание" style={imgStyle}/>, price: "3250", discription: "крутой геймпад", currency: "RUB", count: 0},
    {id: 4, name: "XEOX", img: <img src={xeox} alt="описание" style={imgStyle}/>, price: "5000", discription: "крутой геймпад", currency: "RUB", count: 0},
    {id: 5, name: "Xbox 360", img: <img src={xbox360} alt="описание" style={imgStyle}/>, price: "500", discription: "крутой геймпад", currency: "RUB", count: 0},
    {id: 6, name: "Xbox ONE", img: <img src={xboxone} alt="описание" style={imgStyle}/>, price: "1000", discription: "крутой геймпад", currency: "RUB", count: 0},
    {id: 7, name: "DIALOG", img: <img src={dialog} alt="описание" style={imgStyle}/>, price: "2300", discription: "крутой геймпад", currency: "RUB", count: 0},
    {id: 8, name: "Steelseries", img: <img src={steelseries} alt="описание" style={imgStyle}/>, price: "1990", discription: "крутой геймпад", currency: "RUB", count: 0},
    {id: 9, name: "Dualshock 4", img: <img src={ds4} alt="описание" style={imgStyle}/>, price: "750", discription: "крутой геймпад", currency: "RUB", count: 0},
    {id: 10, name: "MSI", img: <img src={msi} alt="описание" style={imgStyle}/>, price: "900", discription: "крутой геймпад", currency: "RUB", count: 0},
];