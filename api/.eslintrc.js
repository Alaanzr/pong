module.exports = {
	parser: 'babel-eslint',
	extends: [
		'eslint-config-airbnb'
	],
	rules: {
		'compat/compat': 1,
		'prettier/prettier': [
			'error',
			{
				useTabs: true,
				printWidth: 80,
				tabWidth: 4,
				singleQuote: true,
				trailingComma: 'es5',
				jsxBracketSameLine: false,
				semi: false,
			},
		],
		'no-var': 2,
		'no-const-assign': 'error',
		'no-unused-vars': 1
	}
}