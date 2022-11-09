import React , { useState } from "react";
import SearchContext from "./SearchContext";

const SearchState = (props)=>{
    const [search, setSearch] = useState('')
    const [loading,setLoading] = useState(false)
    const [data,setData] = useState({})
    return (<SearchContext.Provider value={{search,setSearch,loading,setLoading,data,setData}}>
        {props.children}
    </SearchContext.Provider>)
}

export default SearchState;