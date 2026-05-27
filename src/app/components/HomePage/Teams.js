"use client";

import { useState } from "react";
import Image from "next/image";
import { teamMembers } from "@/data/team";

const imageSizes =
  "w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-56 xl:h-56";

const Teams = () => {
  const [activeMember, setActiveMember] = useState(teamMembers[0]);

  return (
    <section>
      <div className="mx-auto px-4 sm:px-6 2xl:px-20">
        <h3 className="mb-6 md:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Meet Our Team
        </h3>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8 lg:gap-12">
          <div className="w-full md:w-auto md:flex-1 md:max-w-[800px]">
            <ul className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
              {teamMembers.map((member) => {
                const isActive = activeMember.id === member.id;

                return (
                  <li key={member.id}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveMember(member)}
                      onFocus={() => setActiveMember(member)}
                      className={`w-full text-left py-2 md:py-3 transition-colors cursor-pointer ${
                        isActive
                          ? "text-blue-600"
                          : "text-[#1c1c1c] hover:text-blue-600"
                      }`}
                    >
                      {member.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="w-full md:w-auto flex flex-col items-center md:items-end flex-shrink-0">
            <div
              className={`relative ${imageSizes} rounded-full overflow-hidden bg-gray-200`}
            >
              <Image
                key={activeMember.id}
                src={activeMember.image}
                alt={activeMember.name}
                fill
                sizes="(max-width: 768px) 128px, 224px"
                className="object-cover object-center animate-team-photo"
              />
            </div>
            <p className="mt-4 text-sm sm:text-base font-semibold text-[#1c1c1c]">
              {activeMember.name}
            </p>
            <p className="text-xs sm:text-sm text-gray-600">{activeMember.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
