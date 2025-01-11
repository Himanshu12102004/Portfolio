import { motion, AnimatePresence } from 'framer-motion';
import  { useState } from 'react';
import ProjectSet from './ProjectSet';
import { blockContent, workTabs } from '../../content';
import Tab from '../../../components/Tab';

function Works(props: { isMobile: boolean }) {
  const { isMobile } = props;
  const [selected, setSelected] = useState(0);
  return (
    <div>
      <div className={`text-3xl mt-12`}>Works</div>
      {!isMobile && (
        <div
          className={`mt-5 font-urbanist text-justify ${
            isMobile ? '' : 'w-11/12'
          }`}
        >
        My primary focus has been on designing robust backend systems, ensuring scalable and efficient server-side architectures, and crafting immersive, visually engaging computer graphics experiences. I am adept at developing interactive simulations and games for the web, leveraging the advanced capabilities of WebGL to deliver dynamic and engaging user experiences.
        </div>
      )}
      <Tab
        isMobile={isMobile}
        tabs={workTabs}
        selected={selected}
        setSelected={setSelected}
      ></Tab>
      {/* Tab Content with Smooth Height Transition */}
      <motion.div
        className="mt-6 bg-lowerBgColor p-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          style={{ position: 'relative' }}
          initial={{ height: 'auto' }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.2 }}
            >
              <ProjectSet
                data={blockContent[workTabs[selected]as keyof typeof blockContent]}
                isMobile={isMobile}
              ></ProjectSet>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Works;
