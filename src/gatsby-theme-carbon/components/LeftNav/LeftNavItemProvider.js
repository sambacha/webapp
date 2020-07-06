
import { useStaticQuery, graphql } from 'gatsby';

export function themeUseNavItems() {
  const {
    allNavItemsYaml: { edges },
  // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useStaticQuery(graphql`
    query LEFT_NAV_QUERY1 {
      allNavItemsYaml {
        edges {
          node {
            title
            pages {
              title
              path
            }
          }
        }
      }
    }
  `);

  const navItems = edges.map(({ node }) => node);
  return navItems;
}

// add nav items
export function useNavItems() {
  const navItems = themeUseNavItems();
  // return navItems.concat({
  //   title: 'Additional Nav Item',
  //   pages: [
  //     { path: '/page1', title: 'New Page 1' },
  //     { path: '/page2', title: 'New Page 2' },
  //   ],
  // });
  return navItems;
}

