import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
	small: {
		fontSize: `${14 / 16}rem`,
		iconSize: 16,
		borderThickness: '1px',
		height: `24px`
	},
	large: {
		fontSize: `${18 / 16}rem`,
		iconSize: 24,
		borderThickness: '2px',
		height: `36px`
	}
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
	const styles = STYLES[size];

	if (!styles) {
		throw new Error(`Unknown size passed to IconInput: ${size}`);
	}

	return (
		<Wrapper>
			<VisuallyHidden>{label}</VisuallyHidden>
			<IconWrapper size={styles.iconSize}>
				<Icon id={icon} size={styles.iconSize} />
			</IconWrapper>
			<TextInput width={width} height={styles.height} fontSize={styles.fontSize} {...delegated} />
		</Wrapper>
	);
};

const Wrapper = styled.label`
	display: block;
	position: relative;
	color: ${COLORS.gray500};

	&:hover {
		color: ${COLORS.black};
	}
`;

const IconWrapper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto 0;
	height: ${p => p.size + 'px'};
`;

const TextInput = styled.input`
	height: ${p => p.height};
	border: none;
	border-bottom: ${p => p.borderThickness} solid ${COLORS.black};
	padding-left: ${p => p.height};
	color: inherit;
	width: ${p => p.width + 'px'};
	font-weight: 700;
	font-size: ${p => p.fontSize};

	&::placeholder {
		color: ${COLORS.gray500};
		font-weight: 400;
	}

	&:focus {
		outline-offset: 2px;
	}
`;

export default IconInput;
