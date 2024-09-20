'use client';
import React, { useCallback, useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '../ui/button';

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disable?: boolean;
  secondaryAction?: () => void;
  secondayLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disable,
  secondaryAction,
  secondayLabel: secondaryActionLable
}) => {
  const [showModal, setShowModal] = useState(isOpen);
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disable) {
      return;
    }

    setShowModal(false);

    setTimeout(() => {
      onClose();
    }, 300);
  }, [disable, onClose]);

  const handleSubmit = useCallback(() => {
    if (disable) {
      return;
    }
    onSubmit();
  }, [disable, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disable || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [disable, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="sm:mx-0 fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-neutral-800/70">
      <div className="relative mx-auto h-auto w-full max-w-xl">
        <div
          className={`transform duration-300 ${showModal ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
        >
          <div className="relative flex w-full flex-col rounded-lg bg-white shadow-lg outline-none focus:outline-none">
            {/* HEADER */}
            <div className="flex items-center rounded-t border-b p-6">
              <button
                onClick={handleClose}
                className="absolute left-4 border-0 p-1 transition hover:opacity-70"
              >
                <CloseIcon/>
              </button>
              <div className="mx-auto text-sm font-semibold">{title}</div>
            </div>
            {/* BODY */}
            <div className="relative max-h-[80vh] flex-auto overflow-scroll p-6">
              {body}
            </div>
            {/* FOOTER */}
            <div className="flex flex-col gap-1 p-3">
              <div className="flex w-full flex-row items-center gap-4">
                {secondaryAction && secondaryActionLable && (
                  <Button
                    disabled={disable}
                    onClick={handleSecondaryAction}
                    className="w-full p-4"
                    variant="outline"
                  >
                    {secondaryActionLable}
                  </Button>
                )}
                <Button
                  disabled={disable}
                  onClick={handleSubmit}
                  className="w-full p-4"
                  variant="default"
                >
                  {actionLabel}
                </Button>
              </div>
              {footer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
