module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', ['foundations', 'components', 'docs', 'root', 'release']]
  }
}
