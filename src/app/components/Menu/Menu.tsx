import React, { useState } from "react";
import { FiAlignJustify, FiChevronDown } from "react-icons/fi";
import style from "./Menu.module.css";
import MenuItems, { MenuItem } from "./MenuItems"

const DropdownPaq = ({ item }: ({ item: MenuItem })) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={style.paqDropdown}>
      <a
        href="#"
        className={style.dropdownButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {item.label}
        <FiChevronDown />
      </a>
      {isOpen && (
        <div className={style.dropdownContent}>
          {item.submenu?.map((item) => (
            <a href={item.anchor}>{item.label}</a>
          ))}
        </div>
      )}
    </div>
  );
};


const Menu = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <FiAlignJustify className={style.hamburger} onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}/>
      {isMobileMenuOpen && 
        <div className={style.mobile_container}>
          {MenuItems.map((item : MenuItem) => (
            <>
              <a className={style.mobile_menu_item}>{item.label}</a>
              {item.submenu && (
                item.submenu.map((submenu) => (
                  <a className={style.mobile_submenu_item} href={submenu.anchor}>{submenu.label}</a>
                ))
              )}
            </>
          ))}
        </div>
      }

      <div className={style.dropdownContainer}>
        
        {
          MenuItems.map((item) => {
            if (item.submenu) return <DropdownPaq item={item} />
            return  <a href={item.anchor}>{item.label}</a>
          })
        }
      </div>
    </>
  )
}

export default Menu