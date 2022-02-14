import { render } from '@testing-library/react-native';
import {RepositoryListContainer} from '../../components/RepositoryList';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      // Add your test code here
      const {getAllByTestId} = render(<RepositoryListContainer repositories={repositories} />);
      const [firstItem,secondItem] = getAllByTestId('repositoryItem');

      expect(firstItem).toHaveTextContent('jaredpalmer/formik');
      expect(firstItem).toHaveTextContent('Build forms in React, without the tears');
      expect(firstItem).toHaveTextContent('TypeScript');
      expect(firstItem).toHaveTextContent('1.6k');
      expect(firstItem).toHaveTextContent('21.9k');
      expect(firstItem).toHaveTextContent('88');
      expect(firstItem).toHaveTextContent('3');

      expect(secondItem).toHaveTextContent('async-library/react-async');
      expect(secondItem).toHaveTextContent('Flexible promise-based React data loader');
      expect(secondItem).toHaveTextContent('JavaScript');
      expect(secondItem).toHaveTextContent('0.1k');
      expect(secondItem).toHaveTextContent('1.8k');
      expect(secondItem).toHaveTextContent('72');
      expect(secondItem).toHaveTextContent('3');

    });
  });
});