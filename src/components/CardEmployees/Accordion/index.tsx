import React, {useState} from 'react';
import {AccordionProps} from './@types';
import {
  EmployeeName,
  ContaineCard,
  EmployeePhoto,
  ChevronDownIcon,
  ViewContent,
  ChevronDownButton,
  OpenCardView,
  OpenCardText,
} from './styles';
import {IconProvider} from '../../../providers/IconProvider';
import {Animated, LayoutAnimation} from 'react-native';
import {animation} from './utils';
import {DashedBorderBottom} from '../../DashedBorderBottom';

export const Accordion = ({data}: AccordionProps) => {
  const [showContent, setShowcontent] = useState<boolean>(false);

  const toggleAnimation = () => {
    LayoutAnimation.configureNext(animation);
    setShowcontent(!showContent);
  };

  return (
    <ContaineCard>
      <ViewContent>
        <EmployeePhoto source={{uri: data.image}} />
        <EmployeeName>{data.name}</EmployeeName>
        <ChevronDownButton onPress={() => toggleAnimation()}>
          <ChevronDownIcon source={IconProvider.chevron_down} />
        </ChevronDownButton>
      </ViewContent>
      {showContent && (
        <Animated.View style={{marginTop: 8, paddingBottom: 16}}>
          <OpenCardView>
            <OpenCardText location="left">Cargo</OpenCardText>
            <OpenCardText location="right">{data.job}</OpenCardText>
            <DashedBorderBottom />
          </OpenCardView>
          <OpenCardView>
            <OpenCardText location="left">Data de admissão</OpenCardText>
            <OpenCardText location="right">{data.admission_date}</OpenCardText>
            <DashedBorderBottom />
          </OpenCardView>
          <OpenCardView>
            <OpenCardText location="left">Telefone</OpenCardText>
            <OpenCardText location="right">{data.phone}</OpenCardText>
            <DashedBorderBottom />
          </OpenCardView>
        </Animated.View>
      )}
    </ContaineCard>
  );
};
