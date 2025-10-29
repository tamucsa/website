    // components/Dropdown.jsx
    "use client";

    import React, { useState } from "react";
    import Link from "next/link";

    import { useRef, useEffect } from "react";

    const Dropdown = ({ item } : { item: { label: string, href: string, submenuItems?: { label: string, href: string }[] } }) => {
        const [isOpen, setIsOpen] = useState(false);
        const wrapperRef = useRef<HTMLDivElement | null>(null);
        const lastInputWasKeyboard = useRef(false);

        // Close when clicking outside
        useEffect(() => {
            function onDocMouseDown(e: MouseEvent) {
                if (!wrapperRef.current) return;
                if (!wrapperRef.current.contains(e.target as Node)) {
                    setIsOpen(false);
                }
            }

            function onKeyDown(e: KeyboardEvent) {
                if (e.key === "Escape") setIsOpen(false);
            }

            document.addEventListener("mousedown", onDocMouseDown);
            document.addEventListener("keydown", onKeyDown);
            // track whether the last input was keyboard vs mouse so we can decide
            // whether focus should open the menu (keyboard users expect Tab -> open)
            function onDocKeydownForInput() {
                lastInputWasKeyboard.current = true;
            }
            function onDocMouseDownForInput() {
                lastInputWasKeyboard.current = false;
            }
            document.addEventListener("keydown", onDocKeydownForInput, true);
            document.addEventListener("mousedown", onDocMouseDownForInput, true);
            return () => {
                document.removeEventListener("mousedown", onDocMouseDown);
                document.removeEventListener("keydown", onKeyDown);
                document.removeEventListener("keydown", onDocKeydownForInput, true);
                document.removeEventListener("mousedown", onDocMouseDownForInput, true);
            };
        }, []);

        // Close on blur when focus leaves the whole wrapper
        const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
            const related = e.relatedTarget as Node | null;
            if (!related || !wrapperRef.current?.contains(related)) {
                setIsOpen(false);
            }
        };

        return (
            <div
                ref={wrapperRef}
                className="relative"
                onBlur={handleBlur}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                onFocus={(e) => {
                    // only open on focus if the user navigated via keyboard (Tab)
                    if (lastInputWasKeyboard.current) setIsOpen(true);
                }}
            >
                {/* Main label is a normal link so click navigates to parent page */}
                <Link
                    href={item.href}
                    className="transition tracking-wider text-xl text-black hover:scale-110 hover:text-primary"
                    aria-expanded={isOpen}
                    aria-controls={`dropdown-${item.label.replace(/\s+/g, '-')}`}
                >
                    {item.label}
                </Link>

                {isOpen && (
                    <div id={`dropdown-${item.label.replace(/\s+/g, '-')}`} className="absolute top-full left-0 bg-white shadow-lg py-2 rounded-md">
                        {item.submenuItems?.map((subItem) => (
                            <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="block px-5 py-2 font-primary tracking-wider transition-colors text-lg text-black hover:text-primary"
                            >
                                {subItem.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        );
    };
    export default Dropdown;