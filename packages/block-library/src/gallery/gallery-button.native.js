/**
 * External dependencies
 */
import { StyleSheet, TouchableOpacity, View } from 'react-native';

/**
 * WordPress dependencies
 */
import { Icon } from '@wordpress/components';

/**
 * Internal dependencies
 */
import style from './gallery-image-style';

export function Button( props ) {
	const {
		icon,
		onClick,
		disabled,
		'aria-disabled': ariaDisabled,
		accessibilityLabel = 'button',
		style: customStyle,
	} = props;

	const buttonStyle = StyleSheet.compose( style.buttonActive, customStyle );

	const isDisabled = disabled || ariaDisabled;

	const { fill } = isDisabled ? style.buttonDisabled : style.button;

	return (
		<TouchableOpacity
			activeOpacity={ 0.7 }
			accessible={ true }
			accessibilityLabel={ accessibilityLabel }
			accessibilityRole={ 'button' }
			onPress={ onClick }
			disabled={ isDisabled }
		>
			<View style={ buttonStyle }>
				<Icon icon={ icon } fill={ fill } size={ 24 } />
			</View>
		</TouchableOpacity>
	);
}

export default Button;
