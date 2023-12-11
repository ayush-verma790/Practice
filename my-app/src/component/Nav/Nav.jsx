import React from 'react'
import './Nav.scss'
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";

export default function Nav() {
  return (
    <div className='nav-main'>
        <div className='nav-head'>
            <h2 >Logo</h2>
        </div>
        <div className='nav-item'>
            <ul>
                <li className='item-1'> <FaFacebook /></li>
                <li className='item-2'> <AiFillTwitterCircle /></li>
                <li className='item-3'> <FaInstagramSquare /></li>
            </ul>
        </div>
    </div>
  )
}
