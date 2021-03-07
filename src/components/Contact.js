import { Avatar, Checkbox, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import React from 'react';

export function Contact( { onClick, checkboxChecked, data } ) {

	return (
		<ListItem button onClick={ onClick }>
			<ListItemAvatar>
				<Avatar alt={ `avatar_${ data.data.first_name }_${ data.data.last_name }` } src={ data.data.avatar } />
			</ListItemAvatar>
			<ListItemText primary={ `${ data.data.first_name } ${ data.data.last_name }` } secondary={ data.data.email } />
			<Checkbox checked={ checkboxChecked } />

		</ListItem>
	)
}