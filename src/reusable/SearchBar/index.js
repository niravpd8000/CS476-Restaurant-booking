import React from 'react'
import "./SearchBar.scss"
import searchIcon from "../../assets/icons/Icon color.png";
import {FormControl, InputGroup} from "react-bootstrap";

const SearchBar = props => {
    const {className, placeholder, onChange, options, selectedValue} = props;
    return (
        <div className={`search-bar-div ${className}`}>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>
                        <img src={searchIcon} alt='icon'/>
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl className="search" onChange={onChange} placeholder="Search template"/>
            </InputGroup>
        </div>
    )
};

export default SearchBar
