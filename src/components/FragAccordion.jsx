import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';

const FragAccordion = ({ frag, style, w }) => {
  return (
    <Accordion allowMultiple mt="10" style={{ width: w }}>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Ingridients
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <p className={style.notes}>Top notes:</p>
          {frag.notes.top.map((note, index) => (
            <span key={note}>{(index ? ', ' : '') + note}</span>
          ))}
          <p className={style.notes}>Middle notes:</p>
          {frag.notes.middle.map((note, index) => (
            <span key={note}>{(index ? ', ' : '') + note}</span>
          ))}
          <p className={style.notes}>Base notes:</p>
          {frag.notes.base.map((note, index) => (
            <span key={note}>{(index ? ', ' : '') + note}</span>
          ))}
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Perfumers
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <ul style={{ display: 'block' }}>
            {frag.perfumers.map((p, index) => (
              <li key={index} className={style['perfumers-list']}>
                {p}
              </li>
            ))}
          </ul>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default FragAccordion;
