import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
 return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
 return (
  <div>
   <h1 className="bg-slate-900 text-white">Gregg Cline Portfolio</h1>
  </div>
 );
}
