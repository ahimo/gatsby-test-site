module.exports = {
    pathPrefix: '/gatsby-test-site'
   ,plugins: [
        {
            resolve: 'gatsby-plugin-typography'
           ,options: {
                pathToConfigModule: 'src/utils/typography'
	    }
	}
    ]
}
