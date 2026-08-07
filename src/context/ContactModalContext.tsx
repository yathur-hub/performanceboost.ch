/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import ContactModal from '../components/ContactModal';

interface ContactModalContextType {
  isOpen: boolean;
  openContactModal: () => void;
  closeContactModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openContactModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeContactModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ContactModalContext.Provider value={{ isOpen, openContactModal, closeContactModal }}>
      {children}
      <ContactModal isOpen={isOpen} onClose={closeContactModal} />
    </ContactModalContext.Provider>
  );
}

export function useContactModal(): ContactModalContextType {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error('useContactModal must be used within a ContactModalProvider');
  }
  return context;
}
