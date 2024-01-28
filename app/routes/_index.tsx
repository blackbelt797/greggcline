import type { MetaFunction } from '@remix-run/node';

import NavBar from '~/NavBar';
import Hero from '~/Hero';
import Portfolio from '~/Portfolio';
import Blog from '~/Blog';
import Footer from '~/Footer';

export const meta: MetaFunction = () => {
 return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
 return (
  <div>
   <NavBar />
   <Hero />
   <Portfolio id="portfolio" />
   <Blog id="blog" />
   <Footer />
  </div>
 );
}
