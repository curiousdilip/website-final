"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hardware() {
  const [hardware, setHardware] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHardware = async () => {
      try {
        const res = await fetch(
          "https://api.cosmicjs.com/v3/buckets/website-projects/objects?pretty=true&query=%7B%22type%22:%22hardware%22%7D&limit=10&skip=0&read_key=gV37hS5tuppUOgUwDAjiKKMYsOyBfVjD4HPoVg3iCKu9YFPv2c&depth=1&props=slug,title,metadata,type,"
        );
        const data = await res.json();

        if (data.objects) {
          setHardware(data.objects);
        }
      } catch (error) {
        console.error("Error fetching hardware data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHardware();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="hardware">
      {hardware.map((hardwareItem, index) => (
        <div className="software" key={index}>
          {hardwareItem.metadata.imgsrc?.url ? (
            <Image
              src={hardwareItem.metadata.imgsrc.url}
              alt={hardwareItem.title}
              width={500}
              height={500}
              priority={true}
              layout="intrinsic"
            />
          ) : (
            <div className="placeholder">
              {/* Optional: Add a fallback image or placeholder */}
              <span>No Image Available</span>
            </div>
          )}

          <div className="detail">
            <h3>{hardwareItem.title}</h3>
            <p>{hardwareItem.metadata.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
