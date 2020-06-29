import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import Sction from './Section';
import HeadLine1 from './HeadLine1';
import HeadLine2 from './HeadLine2';
import OneColumnBody from './OneColumnBody';
import InnerSection from './InnerSection';
import GameSelectArea from './GameSelectArea';
import GameNamePlate from './GameNamePlate';
import UnderLineInput from './UnderLineInput';
import BreakUnderLine from './BreakUnderLine';
import HardSelectArea from './HardSelectArea';
import HardIcon from './HardIcon';
import OtherButton from './OtherButton';
import InlineArea from './InlineArea';
import ShadowTextArea from './ShadowTextArea';
import PrimaryButton from './PrimaryButton';
import DangerButton from './DangerButton';
import Section from './Section';

export default function RoomCreation() {
  return (
    <div id="roomcreation">
      <Header />
      <Body>
        <OneColumnBody>
          <Section>
            <InnerSection>
              <HeadLine1 />
              <HeadLine2 />
              <GameSelectArea>
                <GameNamePlate />
              </GameSelectArea>
            </InnerSection>
            <InnerSection>
              <HeadLine2 />
              <UnderLineInput />
            </InnerSection>
          </Section>
          <BreakUnderLine />

          <Section>
            <HeadLine1 />
            <HardSelectArea>
              <HardIcon />
            </HardSelectArea>
          </Section>
          <BreakUnderLine />

          <Section>
            <OtherButton />
            <InlineArea>
              <OtherButton />
              <ShadowTextArea />
              <ShadowTextArea />
            </InlineArea>
            <OtherButton />
          </Section>
          <BreakUnderLine />

          <Sction>
            <HeadLine1 />
            <ShadowTextArea />
            <PrimaryButton />
            <DangerButton />
          </Sction>
        </OneColumnBody>
      </Body>
      <Footer />
    </div>
  );
}
