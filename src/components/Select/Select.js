import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
	const displayedValue = getDisplayedValue(value, children);

	return (
		<Wrapper>
			<NativeSelect value={value} onChange={onChange}>
				{children}
			</NativeSelect>
			<PresentationBit>
				{displayedValue}

				<IconWrapper size={24}>
					<Icon id="chevron-down" stokeWidth={1} size={24}></Icon>
				</IconWrapper>
			</PresentationBit>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: relative;
	width: max-content;
`;

const NativeSelect = styled.select`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
`;

const IconWrapper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 10px;
	margin: auto;
	width: ${p => p.size + 'px'};
	height: ${p => p.size + 'px'};
	pointer-events: none;
`;

const PresentationBit = styled.div`
	background-color: ${COLORS.transparentGray15};
	border-radius: 8px;
	padding: 12px 52px 12px 16px;
	color: ${COLORS.gray700};
	font-size: ${16 / 16}rem;
	font-family: 'Roboto';
	width: max-content;

	/* show focus ring if adjacent element (native select) is focused */
	${NativeSelect}:focus + & {
		outline: 1px dotted #212121;
		outline: 5px auto -webkit-focus-ring-color;
	}

	/* show focus ring if adjacent element (native select) is focused */
	${NativeSelect}:hover + & {
		color: ${COLORS.black};
	}
`;

export default Select;
