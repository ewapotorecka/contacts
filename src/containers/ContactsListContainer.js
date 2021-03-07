import React, { useState } from 'react';
import { Input, List, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { ContactContainer } from './ContactContainer';

export function ContactsListContainer( { data } ) {
	const contacts = data.sort( ( a, b ) => ( a.last_name > b.last_name ) ? 1 : -1 );
	const [ filteredContacts, setFilteredContacts ] = useState( contacts );

	const filterContacts = ( phrase ) => {
		setFilteredContacts( contacts.filter( contact =>
			contact.first_name.toLowerCase().startsWith( phrase.toLowerCase() )
			|| contact.last_name.toLowerCase().startsWith( phrase.toLowerCase() ) ) );
	}

	return (
		<div>
			<Input startAdornment={
				<InputAdornment position="start">
					<SearchIcon />
				</InputAdornment>
			} onChange={ event => filterContacts( event.target.value ) } />
			<List className='list-container' style={ { margin: 'auto' } }>
				{ filteredContacts.map( contact => {
					return <ContactContainer data={ contact } key={ contact.id } />
				} ) }
			</List>

		</div> );
}
