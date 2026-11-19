const bucket = "https://bnvvilezgywmfijpspga.supabase.co/storage/v1/object/public/micro-screed-public";

export const media = {
  logo: `${bucket}/logo.jpg`,
  hero: `${bucket}/hero.jpg`,
  "indoor-finish": `${bucket}/indoor-finish.jpg`,
  "interior-floor": `${bucket}/interior-floor.jpg`,
  "open-plan-floor": `${bucket}/open-plan-floor.jpg`,
  "poolside-finish": `${bucket}/poolside-finish.jpg`,
  "floor-preparation": `${bucket}/floor-preparation.jpg`,
  "sunlit-floor": `${bucket}/sunlit-floor.jpg`,
  "polished-living-room": `${bucket}/polished-living-room.jpg`,
};

export const projectPhotos = [
  { src: media["poolside-finish"], alt: "Smooth light-coloured surface surrounding a swimming pool", title: "A fresh feel by the pool" },
  { src: media["sunlit-floor"], alt: "A sunlit room with a clean, continuous light concrete floor", title: "Sunlight across a seamless floor" },
  { src: media["open-plan-floor"], alt: "Bright open-plan living space with a pale concrete finish", title: "Room to breathe" },
  { src: media["indoor-finish"], alt: "Interior flooring project with a smooth finish between rooms", title: "One finish, from room to room" },
  { src: media["floor-preparation"], alt: "A specialist carefully preparing the floor for a new finish", title: "Getting the surface ready" },
  { src: media["interior-floor"], alt: "Open interior with a newly prepared pale floor", title: "A clean slate" },
  { src: media["polished-living-room"], alt: "A warm, light-filled room with a finished pale floor", title: "A welcoming finish" },
];