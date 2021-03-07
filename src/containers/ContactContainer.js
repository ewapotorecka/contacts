import React, { useState } from 'react';
import { Contact } from '../components/Contact';

export function ContactContainer( data ) {
	const [ checkboxChecked, setCheckboxChecked ] = useState( false );
	const handleClick = () => {
		setCheckboxChecked( !checkboxChecked );
		console.log( data.data.id );
	}

	return <Contact onClick={ handleClick } checkboxChecked={ checkboxChecked } data={ data } />
}