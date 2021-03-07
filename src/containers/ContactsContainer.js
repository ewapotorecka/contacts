import React, { useEffect, useState } from 'react';
import { Box, Container } from '@material-ui/core';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import { ContactsListContainer } from './ContactsListContainer';

export function ContactsContainer() {
	const [ contactsData, setContactsData ] = useState( [] );
	const [ isLoaded, setIsLoaded ] = useState( false );
	const [ error, setError ] = useState( false );

	useEffect( () => {
		fetch( 'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json' )
			.then( response => response.json() )
			.then( data => {
				setContactsData( data );
				setIsLoaded( true );
			} )
			.catch( error => {
				setError( error );
				setIsLoaded( true );
			} );
	}, [] );

	if ( !isLoaded ) {
		return (
			<Container>
				<header>
					<h2>Contacts</h2>
				</header>
				<Box style={ { margin: '50px' } }>
					<HourglassEmptyIcon />
					<p>Loading contacts</p>
				</Box>
			</Container>
		);
	} else if ( error ) {
		return (
			<Container>
				<header>
					<h2>Contacts</h2>
				</header>
				<div>{ error.message }</div>
			</Container>
		)
	} else {
		return (
			<Container>
				<header>
					<h2>Contacts</h2>
				</header>
				<ContactsListContainer data={ contactsData } />
			</Container>
		)


	}
}