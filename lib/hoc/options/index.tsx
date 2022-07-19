/* eslint-disable react/no-unused-prop-types */
import { Children } from 'react';
import { Menu, Transition } from '@headlessui/react';

interface OptionsProp {
  children: React.ReactNode | React.ReactNode[];
  panelClassName?: string;
}
const OptionsComp = ({ children }: OptionsProp) => {
  const childrenNode = Children.toArray(children);
  return (
    <Menu>
      <Menu.Button> {childrenNode[0]}</Menu.Button>

      {/* Use the Transition component. */}
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items>
          {childrenNode[1]}
          {childrenNode[2]}
          {childrenNode[2]}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default OptionsComp;
