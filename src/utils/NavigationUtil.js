const paths = {
    home: '/',
    dashboard: '/dashboard',
    tests: '/tests',
    profiles: '/profiles',
}

const testPaths = {
    new: '/create',
    edit: '/edit',
    run: '/run'
}

const NavigationUtil = {
    pathMatchers: {
        home: paths.home,
        dashboard: {
            home: paths.dashboard,
        },
        profiles: {
            home: paths.profiles,
        },
        tests: {
            home: paths.tests,
            new: `${paths.tests}${testPaths.new}`,
            edit: `${paths.tests}/:id${testPaths.edit}`,
            run: `${paths.tests}/:id${testPaths.run}`,
        }
    },

    links: {
        home: paths.home,
        dashboard: {
            home: paths.dashboard,
        },
        profiles: {
            home: paths.profiles,
        },
        tests: {
            home: paths.tests,
            new: `${paths.tests}${testPaths.new}`,
            editById(id) { return `${paths.tests}/${id}${testPaths.edit}` },
            runById(id) { return `${paths.tests}/${id}${testPaths.run}` },
        }
    }
}

export default NavigationUtil;