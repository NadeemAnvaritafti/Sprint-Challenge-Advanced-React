import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useInput} from '../hooks/useInput';
import SearchForm from './SearchForm';
import Card from './Card';

function SearchList() {
    const [data, setData] = useInput([]);
    const [search, setSearch] = useInput('');

    useEffect( () => {
        axios.get('http://localhost:5000/api/players')
        .then(res => {
            const players = res.data.filter(item =>
                item.name.toLowerCase().includes(search.toLowerCase())
                );
            setData(players);  
        })
        .catch(error => {
            console.log(error);
        })
    }, [search]);

    const changeSearch = e => {
        setSearch(e.target.value);
    }

    return (
        <div>
            <SearchForm changeSearch={changeSearch} search={search}/>
            {data.map(item => (
                <Card name={item.name} country={item.country} searches={item.searches} />
            ))}
        </div>
    )
}

export default SearchList;
