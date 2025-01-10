import { useRef } from 'react';
import { motion } from 'framer-motion';

function Tab(props: {
  isMobile: boolean;
  tabs: string[];
  selected: number;
  setSelected: (arg: number) => void;
}) {
  let { isMobile, tabs, selected, setSelected } = props;
    const tabsRef = useRef<HTMLDivElement[]>([]);
  return (
    <div className="relative">
      {/* Scrollable Tabs */}
      <div
        className={`flex gap-6 mt-${
          isMobile ? '4' : '5'
        } font-exo font-semibold overflow-x-auto whitespace-nowrap scrollbar-hidden relative`}
      >
        {tabs.map((value, index) => (
          <div
            className={`cursor-pointer transition-all duration-300 text-lg relative py-2 ${
              index == 0 && selected == index ? 'pl-[10px]' : ''
            } ${selected === index ? 'text-primary-600' : ''}`}
            key={index}
            ref={(el) => (tabsRef.current[index] = el!)}
            onClick={() => setSelected(index)}
          >
            {value}
            {/* Animated border */}
            {selected === index && (
              <motion.div
                className="absolute bottom-0 h-1 bg-primary-600"
                initial={{ width: 0, left: '50%' }}
                animate={{
                  width: 'calc(100% + 20px)', // Extend 10px on each side
                  left: '-10px', // Shift left by 10px
                }}
                exit={{ width: 0, left: '50%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tab;
