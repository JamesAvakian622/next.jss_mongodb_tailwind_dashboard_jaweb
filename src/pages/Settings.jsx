import React, { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import Breadcrumb from "../components/Breadcrumb";

/**
 * Contact form ("Write Me").
 *
 * Submits via the user's default mail client using a `mailto:` link
 * pointed at javakian2025@gmail.com. The form contents are encoded into
 * the email body. Two image upload slots are provided — `mailto:` cannot
 * transmit attachments programmatically, so the message reminds the user
 * to attach the images they selected once their mail client opens.
 *
 * If you want truly automated send-with-attachments later, swap this for
 * a Convex action + Resend / SendGrid integration and post to that here.
 */
const TO_EMAIL = "javakian2025@gmail.com";

const Settings = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [images, setImages] = useState({ image1: null, image2: null });

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const onPickImage = (slot) => (e) => {
    const file = e.target.files?.[0] ?? null;
    setImages((prev) => ({ ...prev, [slot]: file }));
  };

  const reset = () => {
    setForm({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setImages({ image1: null, image2: null });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const lines = [
      `From: ${form.fullName || "(no name)"}`,
      form.email ? `Email: ${form.email}` : null,
      form.phone ? `Phone: ${form.phone}` : null,
      "",
      form.message || "(no message)",
    ].filter(Boolean);

    const attachmentNotes = [];
    if (images.image1) attachmentNotes.push(`Image 1: ${images.image1.name}`);
    if (images.image2) attachmentNotes.push(`Image 2: ${images.image2.name}`);
    if (attachmentNotes.length) {
      lines.push("", "--", "Please attach these from your computer:");
      lines.push(...attachmentNotes);
    }

    const subject = form.subject || "Message from JamesAvakian.com";
    const body = lines.join("\n");

    const href = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
  };

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Write Me" />

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
            <h3 className="text-lg font-medium text-black dark:text-white">
              Write Me
            </h3>
            <p className="mt-1 text-sm text-body dark:text-bodydark">
              Send a note straight to{" "}
              <span className="font-medium">{TO_EMAIL}</span>. You can attach up
              to two images — your mail client will open with the form already
              filled in, and the images you picked are listed at the bottom so
              you can attach them in one tap.
            </p>
          </div>

          <form className="p-7" onSubmit={onSubmit}>
            <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
              <div className="w-full sm:w-1/2">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor="fullName"
                >
                  Your Name
                </label>
                <input
                  className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={form.fullName}
                  onChange={update("fullName")}
                  placeholder="Jane Doe"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor="phone"
                >
                  Phone (optional)
                </label>
                <input
                  className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div className="mb-5.5">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={update("email")}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="mb-5.5">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={update("subject")}
                placeholder="What's this about?"
              />
            </div>

            <div className="mb-5.5">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                id="message"
                name="message"
                rows="6"
                value={form.message}
                onChange={update("message")}
                placeholder="Type your message here…"
                required
              ></textarea>
            </div>

            <div className="mb-5.5 grid grid-cols-1 gap-5.5 sm:grid-cols-2">
              {[
                { slot: "image1", label: "Image 1 (optional)" },
                { slot: "image2", label: "Image 2 (optional)" },
              ].map(({ slot, label }) => (
                <div key={slot}>
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor={slot}
                  >
                    {label}
                  </label>
                  <input
                    className="w-full rounded border border-stroke bg-gray py-2.5 px-3 text-sm text-black file:mr-3 file:rounded file:border-0 file:bg-primary file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-white hover:file:bg-opacity-90 dark:border-strokedark dark:bg-meta-4 dark:text-white"
                    type="file"
                    id={slot}
                    name={slot}
                    accept="image/*"
                    onChange={onPickImage(slot)}
                  />
                  {images[slot] ? (
                    <p className="mt-2 text-xs text-body dark:text-bodydark">
                      Selected: {images[slot].name}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-4.5">
              <button
                type="button"
                onClick={reset}
                className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-white hover:bg-opacity-90"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Settings;
