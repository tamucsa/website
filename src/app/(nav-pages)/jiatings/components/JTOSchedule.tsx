"use client";

import { Spring2026JTOList } from '@/content/2025-2026/springJTO';

import React, { FC, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';

interface FullScreenModalProps {
  semester: string;
  isOpen: boolean;
  onClose: () => void;
  className?: string
}

const JTOScheduleCard: FC<FullScreenModalProps> = ({ semester, isOpen, onClose, className }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Lock background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open-bg');
    } else {
      document.body.classList.remove('modal-open-bg');
    }
    return () => {
      document.body.classList.remove('modal-open-bg');
    };
  }, [isOpen]);

  // Debug: log overlay size & window metrics when modal opens
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const rect = modalRef.current.getBoundingClientRect();
      // eslint-disable-next-line no-console
      console.log('Modal overlay rect:', rect, 'window.innerWidth/Height:', window.innerWidth, window.innerHeight, 'scrollY:', window.scrollY);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    } else {
      document.removeEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (modalRef.current && event.target === modalRef.current) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const overlay = (
    <div
      ref={modalRef}
      onClick={handleOverlayClick}
      className={`${className}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2147483647,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '1.25rem',
        backgroundColor: 'rgba(0,0,0,0.6)',
        boxSizing: 'border-box'
      }}
    >
  <div className="relative w-full max-w-xl rounded-lg bg-white p-6 shadow-xl m-5 max-h-[calc(100dvh-2.5rem)] overflow-y-auto md:mt-0" >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-4xl"
        >
          &times;
        </button>
        <h1 className='text-center text-lg md:text-2xl'>
            Official {semester} JTO Schedule
        </h1>
        <ul>
          {Spring2026JTOList.map((event, index) =>
            event.oneDay ? (
              <li key={index} className="text-sm md:text-base border-b last:border-0 py-2">
                <strong>{`${event.dayEntries[0].date} (${event.dayEntries[0].day})`}:</strong> {`${event.title} ${event.dayEntries[0].time} @ ${event.location}`}
                <li className={classNames('', {
                    'hidden': !event.completed
                })}>{`🥇 ${event.placements?.[1]?.name} 🥈 ${event.placements?.[2]?.name} 🥉 ${event.placements?.[3]?.name}`}
                </li> 
              </li>
            ) : (
              <li key={index} className="text-sm md:text-base border-b last:border-0 py-2">
                <strong>
                  {event.dayEntries[0].date} - {event.dayEntries[event.dayEntries.length - 1].date}:
                </strong> {`${event.title} @ ${event.location}`}
                <ul>
                  {event.dayEntries.map((day, dayIndex) => (
                    <li key={dayIndex} className="ml-4">
                      {`${day.title}: ${day.date} ${day.time}`}
                    </li>
                  ))}
                </ul>
                <li className={classNames('', {
                    'hidden': !event.completed
                })}>{`🥇 ${event.placements?.[1]?.name} 🥈 ${event.placements?.[2]?.name} 🥉 ${event.placements?.[3]?.name}`}
                </li>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );

  // Render overlay into document.body to guarantee it covers the viewport regardless of ancestor transforms
  return typeof document !== 'undefined' ? createPortal(overlay, document.body) : null;
};

export default JTOScheduleCard;