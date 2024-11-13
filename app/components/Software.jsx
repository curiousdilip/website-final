"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Software() {
  const [software, setSoftware] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSoftware = async () => {
      try {
        const res = await fetch(
          "https://api.cosmicjs.com/v3/buckets/website-projects/objects?pretty=true&query=%7B%22type%22:%22software%22%7D&limit=10&skip=0&read_key=gV37hS5tuppUOgUwDAjiKKMYsOyBfVjD4HPoVg3iCKu9YFPv2c&depth=1&props=slug,title,metadata,type,"
        );
        const data = await res.json();

        if (data.objects) {
          setSoftware(data.objects);
        }
      } catch (error) {
        console.error("Error fetching software data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSoftware();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="softwares">
      {software.map((software, index) => (
        <div className="software" key={index}>
          <Image
            src={software.metadata.img_src.url}
            alt={software.title}
            width={500}
            height={500}
            priority="true"
            layout="intrinsic"
          />
          <div className="detail">
            <h3>{software.title}</h3>
            <p>{software.metadata.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
