"use client";
import { FileIcon, ImageIcon } from "lucide-react";

import { Paperclip } from "lucide-react";
import { useState, useEffect } from "react";
import TruthyRenderer from "../truthy-renderer";
import { AppConstants } from "@/constants/constants";

export default function FileUploadDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        event.target instanceof HTMLElement &&
        !event.target.closest("[data-id='file-upload-dropdown']")
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      const fileInput = document.querySelector(
        '[data-id="file-upload-dropdown-item"]'
      ) as HTMLLabelElement;
      if (fileInput) {
        fileInput.focus();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const dropdown = document.querySelector('[data-id="file-upload-dropdown"]');
    const focusableElements = dropdown?.querySelectorAll(
      'label[tabindex="1"]'
    ) as NodeListOf<HTMLElement>;

    if (!focusableElements?.length) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTabKey);
    return () => document.removeEventListener("keydown", handleTabKey);
  }, [isOpen]);

  return (
    <div data-id="file-upload-dropdown" className="relative">
      <button
        className="bg-transparent  p-2 relative rounded-full hover:text-app-textHover"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Paperclip className="w-5 h-5" />
      </button>
      <TruthyRenderer value={isOpen}>
        <div className="w-40 absolute bottom-full left-0 bg-app-inputBg rounded-lg shadow-lg p-2">
          <FileUploadDropdownItem />
          <ImageUploadDropdownItem />
        </div>
      </TruthyRenderer>
    </div>
  );
}

function FileUploadDropdownItem() {
  return (
    <label
      tabIndex={1}
      data-id="file-upload-dropdown-item"
      className="bg-transparent flex items-center gap-2 p-2 w-full cursor-pointer relative rounded-lg  hover:bg-app-secondary focus:bg-app-secondary"
    >
      <FileIcon className="w-5 h-5" />
      <span>File</span>
      <input
        type="file"
        className="hidden"
        accept={AppConstants.FILE_FORMATS}
      />
    </label>
  );
}

function ImageUploadDropdownItem() {
  return (
    <label
      tabIndex={1}
      data-id="image-upload-dropdown-item"
      className="bg-transparent flex items-center gap-2 p-2 w-full cursor-pointer relative rounded-lg  hover:bg-app-secondary focus:bg-app-secondary"
    >
      <ImageIcon className="w-5 h-5" />
      <span>Image</span>
      <input
        type="file"
        className="hidden"
        accept={AppConstants.IMAGE_FORMATS}
      />
    </label>
  );
}
