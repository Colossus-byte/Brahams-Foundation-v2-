import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Dockets from '@/components/Dockets';
import Pillars from '@/components/Pillars';
import EducationSponsor from '@/components/EducationSponsor';
import Events from '@/components/Events';
import Impact from '@/components/Impact';
import Gallery from '@/components/Gallery';
import Team from '@/components/Team';
import News from '@/components/News';
import Sponsors from '@/components/Sponsors';
import Donate from '@/components/Donate';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { client } from '@/sanity/lib/client';
import {
  eventsQuery,
  galleryAlbumsQuery,
  newsPostsQuery,
  teamMembersQuery,
  siteSettingsQuery,
} from '@/sanity/lib/queries';

export default async function Home() {
  let events = [];
  let albums = [];
  let news = [];
  let team = [];
  let settings = null;

  try {
    [events, albums, news, team, settings] = await Promise.all([
      client.fetch(eventsQuery),
      client.fetch(galleryAlbumsQuery),
      client.fetch(newsPostsQuery),
      client.fetch(teamMembersQuery),
      client.fetch(siteSettingsQuery),
    ]);
  } catch {
    // Gracefully degrade — show static/empty state when Sanity isn't configured yet
  }

  return (
    <>
      <Nav />
      <main>
        <Hero settings={settings} />
        <Mission settings={settings} />
        <Dockets />
        <Pillars />
        <EducationSponsor />
        <Events events={events} />
        <Impact />
        <Gallery albums={albums} />
        <Team team={team} />
        {news.length > 0 && <News news={news} />}
        <Sponsors />
        <Donate />
        <Contact settings={settings} />
      </main>
      <Footer />
    </>
  );
}
