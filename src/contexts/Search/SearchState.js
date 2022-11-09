import React , { useState } from "react";
import SearchContext from "./SearchContext";

const SearchState = (props)=>{
    const [search, setSearch] = useState('')
    const [loading,setLoading] = useState(false)
    return (<SearchContext.Provider value={{search,setSearch,loading,setLoading}}>
        {props.children}
    </SearchContext.Provider>)
}

export default SearchState;