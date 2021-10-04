/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
	small: {
		height: '8px',
		padding: 0,
		radius: '4px'
	},
	medium: {
		height: '16px',
		padding: 0,
		radius: '4px'
	},
	large: {
		height: '24px',
		padding: '4px',
		radius: '8px'
	}
};

const ProgressBar = ({ value, size }) => {
	const styles = STYLES[size];

	if (!styles) {
		throw new Error(`Unknown size passed to ProgressBar: ${size}`);
	}

	return (
		<Wrapper
			role="progressbar"
			aria-valuenow={value}
			aria-valuemin="0"
			aria-valuemax="100"
			padding={styles.padding}
			radius={styles.radius}
		>
			<VisuallyHidden>{value}</VisuallyHidden>
			<BarWrapper>
				<Bar value={value} height={styles.height}></Bar>
			</BarWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: ${COLORS.transparentGray15};
	box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
	border-radius: ${props => props.radius};
	padding: ${props => props.padding};
`;

const BarWrapper = styled.div`
	border-radius: 4px;
	/* trim off corners when progress bar is near 100% */
	overflow: hidden;
`;

const Bar = styled.div`
	width: ${props => props.value + '%'};
	height: ${props => props.height};
	background-color: ${COLORS.primary};
	border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
