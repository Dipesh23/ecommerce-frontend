import React from 'react'
import { FaSearch, FaShoppingBag } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <nav>
    <Link to={"/"}>Home</Link>
    <Link to={"/search"}><FaSearch/></Link>
    <Link to={"/cart"}><FaShoppingBag/></Link>
   </nav>
  )
}

export default Header
