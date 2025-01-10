import { useState } from 'react';
import { technologies, techTabs } from '../../content';
import { AnimatePresence, motion } from 'framer-motion';
import Tab from '../../../components/Tab';
import TechSet from './TechSet';

function Technologies(props: { isMobile: boolean }) {
  const [selected, setSelected] = useState(0);
  let { isMobile } = props;

  return (
    <div className="pt-16 font-urbanist">
      <div className="text-3xl">Tech Stack</div>
      <Tab
        isMobile={isMobile}
        tabs={techTabs}
        selected={selected}
        setSelected={setSelected}
      ></Tab>
      <motion.div
        className="mt-6 bg-lowerBgColor p-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        layout 
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.2 }}
            layout 
          >
            <TechSet technologies={technologies[selected]} />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Technologies;
