module.exports = {
  extends: ['wesbos', 'plugin:mdx/recommended'],
  overrides: [
    {
      files: ['*.md'],
      rules: {
        'react/prop-types': 1,
        'react/destructuring-assignment': 1,
        'react/no-access-state-in-setstate': 1,
        'react/jsx-props-no-spreading': 1,

        'react/jsx-no-useless-fragment': 1,
        'no-useless-escape': 0,
        'prettier/prettier': [
          2,
          {
            parser: 'markdown',
          },
        ],
      },
    },
    {
      files: ['*.mdx'],
      extends: ['plugin:mdx/overrides'],
    },
  ],
};
