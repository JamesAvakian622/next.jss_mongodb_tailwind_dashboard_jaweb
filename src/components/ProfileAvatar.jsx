import React, { useRef } from "react";
import CoolJimmyAvatar from "../images/cool-jimmy-avatar.png";
import { useProfilePhoto } from "../hooks/useProfilePhoto";

/**
 * Circular profile image with optional Clerk image and persisted local upload.
 * Edit button opens file picker (does not propagate to parent triggers).
 */
export default function ProfileAvatar({
  clerkImageUrl,
  fallbackSrc = CoolJimmyAvatar,
  alt = "Profile",
  className = "",
}) {
  const fileRef = useRef(null);
  const { resolvedSrc, setFromFile } = useProfilePhoto(clerkImageUrl);
  const src = resolvedSrc || fallbackSrc;

  const onPickClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    fileRef.current?.click();
  };

  const onFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) setFromFile(file);
    e.target.value = "";
  };

  return (
    <div
      className={`relative inline-flex h-12 w-12 flex-shrink-0 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="h-12 w-12 rounded-full border-2 border-stroke object-cover dark:border-strokedark"
      />
      <button
        type="button"
        title="Change profile photo"
        aria-label="Change profile photo"
        onClick={onPickClick}
        className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border border-stroke bg-white text-[11px] font-semibold text-gray-700 shadow-sm hover:bg-gray-2 dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:bg-strokedark"
      >
        Edit
      </button>
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        className="sr-only"
        aria-hidden
        tabIndex={-1}
        onChange={onFileChange}
      />
    </div>
  );
}
