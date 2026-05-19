export const eventsQuery = `*[_type == "event"] | order(date desc) {
  _id,
  title,
  status,
  category,
  date,
  endDate,
  location,
  coverPhoto {
    asset->{url},
    hotspot
  },
  shortDescription,
  registrationLink,
  featured
}`;

export const galleryAlbumsQuery = `*[_type == "galleryAlbum"] | order(date desc) {
  _id,
  title,
  category,
  date,
  coverImage {
    asset->{url},
    hotspot
  },
  photos[] {
    image {
      asset->{url},
      hotspot
    },
    caption
  }
}`;

export const newsPostsQuery = `*[_type == "newsPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  coverImage {
    asset->{url},
    hotspot
  },
  excerpt
}`;

export const teamMembersQuery = `*[_type == "teamMember"] | order(order asc) {
  _id,
  name,
  role,
  photo {
    asset->{url},
    hotspot
  },
  bio,
  order
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  heroHeadline,
  heroSubtext,
  missionText,
  phone,
  email,
  address
}`;
