import React, { useEffect, useState } from 'react';
import {BsSearch, BsYoutube} from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';

function SearchHeader() {
    const { keyword } = useParams();
    const navigate = useNavigate();
    const [text, setText] = useState('');

    useEffect(() => setText(keyword || ''), [keyword]);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/videos/${text}`);
    }

  return (
    <header>
      <Link to='/'>
        <BsYoutube />
        <h1>Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Search...' value={text} onChange={e => setText(e.target.value)} />
        <button><BsSearch /></button>
      </form>
    </header>
  );
}

export default SearchHeader;