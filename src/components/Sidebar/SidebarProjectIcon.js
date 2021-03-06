// @flow
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import SelectableImage from '../SelectableImage';
import SelectableItem from '../SelectableItem';

type Props = {
  id: string,
  size: number,
  name: string,
  color?: string,
  iconSrc?: string,
  isSelected: boolean,
  handleSelect: () => void,
};

const SidebarProjectIcon = ({
  id,
  size,
  name,
  color,
  iconSrc,
  isSelected,
  handleSelect,
}: Props) => {
  const sharedProps = {
    size,
    color1: COLORS.white,
    color2: COLORS.white,
    status: isSelected ? 'highlighted' : 'faded',
    onClick: handleSelect,
  };

  // For projects with an icon, we want to render a selectable image, with
  // that icon. For imported projects with no icon, we instead want to render
  // a circle with the first letter of that project name.
  return iconSrc ? (
    <SelectableImage src={iconSrc} {...sharedProps} />
  ) : (
    <SelectableItem {...sharedProps}>
      {status => (
        <ProjectNameIcon style={{ backgroundColor: color }}>
          {name.slice(0, 1).toUpperCase()}
        </ProjectNameIcon>
      )}
    </SelectableItem>
  );
};

const ProjectNameIcon = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: ${COLORS.white};
  border-radius: 50%;
`;

export default SidebarProjectIcon;
