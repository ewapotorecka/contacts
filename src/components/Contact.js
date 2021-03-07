import { Checkbox, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import React from 'react';
import Img from "react-cool-img";

export function Contact( { onClick, checkboxChecked, data } ) {

	return (
		<ListItem button onClick={ onClick }>
			<ListItemAvatar>
				<Img
					alt={ `avatar_${ data.data.first_name }_${ data.data.last_name }` }
					src={ data.data.avatar ?
						data.data.avatar :
						`https://eu.ui-avatars.com/api/?name=${ data.data.first_name }+${ data.data.last_name }` }
					className='avatar'
				/>
			</ListItemAvatar>
			<ListItemText primary={ `${ data.data.first_name } ${ data.data.last_name }` } secondary={ data.data.email } />
			<Checkbox checked={ checkboxChecked } />

		</ListItem>
	)
}