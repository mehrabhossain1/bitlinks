"use client";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

const ShortenPage = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState(false);

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shortUrl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUrl("");
        setShortUrl("");
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
        console.log(result);
        toast.success(result.message);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Generate your short URLs</h1>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          value={url}
          className="px-4 py-2 focus:outline-purple-600 rounded-md"
          placeholder="Enter your URL"
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          type="text"
          value={shortUrl}
          className="px-4 py-2 focus:outline-purple-600 rounded-md"
          placeholder="Enter your preferred short URL text"
          onChange={(e) => setShortUrl(e.target.value)}
        />
        <button
          onClick={generate}
          className="bg-purple-500 rounded-lg shadow-lg p-3 py-1 my-3 font-bold text-white"
        >
          Generate
        </button>
      </div>

      {generated && (
        <>
          <span className="font-bold text-lg">Your Link</span>
          <code>
            <Link target="_blank" href={generated}>
              {generated}
            </Link>
          </code>
        </>
      )}
    </div>
  );
};

export default ShortenPage;
