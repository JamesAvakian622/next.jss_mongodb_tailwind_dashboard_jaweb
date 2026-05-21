import React, { useState } from "react";

/**
 * Dashboard preview card.
 *
 * Layout:
 *  - Title at the top
 *  - URL underneath (small, dimmed)
 *  - Screenshot below, opens the URL in a new tab when the card is clicked
 *
 * If the image file is missing, a labeled placeholder fills the slot
 * instead so the layout doesn't shift.
 */
export default function SitePreviewCard({ title, url, image, alt }) {
  const [imgFailed, setImgFailed] = useState(false);
  const display = url.replace(/^https?:\/\//, "");

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border border-stroke bg-white shadow-default transition hover:-translate-y-0.5 hover:shadow-lg dark:border-strokedark dark:bg-boxdark"
    >
      <div className="px-5 pt-4 pb-3">
        <h3 className="text-lg font-semibold text-black dark:text-white">
          {title}
        </h3>
        <p className="mt-0.5 truncate text-xs text-body dark:text-bodydark">
          {display}
        </p>
      </div>
      <div className="relative aspect-video w-full bg-black/5 dark:bg-black/30">
        {imgFailed ? (
          <div className="flex h-full w-full items-center justify-center px-4 text-center text-xs text-body dark:text-bodydark">
            {`Drop ${image.split("/").pop()} into ${image
              .split("/")
              .slice(0, -1)
              .join("/")}/`}
          </div>
        ) : (
          <img
            src={image}
            alt={alt || title}
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        )}
      </div>
    </a>
  );
}
